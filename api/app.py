import json
import pdb
from chalice import Chalice
from imap2dict import MailClient

app = Chalice(app_name='api')

@app.route("/fetch_mail", methods=["POST"], api_key_required=True)
def fetch_mail():
    request_params = app.current_request.json_body
    # 必須
    host_name = request_params["host_name"]
    user_id = request_params["user_id"]
    password = request_params["password"]
    # 任意
    search_option = (
            request_params["search_option"]
            if "search_option" in request_params
            else "UNSEEN"
            )
    timezone = (
            request_params["timezone"] if "timezone" in request_params else "Asia/Tokyo"
            )

    # メールを受信
    cli = MailClient(host_name, user_id, password)
    messages = cli.fetch_mail(search_option=search_option, timezone=timezone)
    resp = {"status": "OK", "messages": messages}
    
    # 結果を返す
    return json.dumps(resp, ensure_ascii=False)

@app.route("/delete_mail", methods=["DELETE"], api_key_required=True)
def delete_mail():
    request_params = app.current_request.json_body
    # 必須
    host_name = request_params["host_name"]
    user_id = request_params["user_id"]
    password = request_params["password"]
    # 任意
    days = request_params["days"] if "days" in request_params else 90

    # メールを削除
    cli = MailClient(host_name, user_id, password)
    delete_count = cli.delete_mail(days=days)

    return {"delete_count": delete_count}

