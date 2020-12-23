
import requests,base64,random,time,json


fn= 'test002.py'


def fn_base64(fn):
    # 打开本地图片，并转化为base64
    f = open(fn, 'rb')
    fnb64 = base64.b64encode(f.read()).decode('utf-8')
    return fnb64

tokens='1f3814892dce0dfa6ef9243af480c31ed7c4db02'#
headers = {"Authorization": 'token '+tokens} # 前两行会在后面的代码中忽略掉不写


url = "https://api.github.com/repos/vinkine/Top7/contents/public/"+ fn
d = {
   "message": "my commit message",
   "committer": {
     "name": "vinkine",
     "email": "fwj_777@qq.com"
   },
   "content": fn_base64(fn)
 }


r = requests.put(url=url,data=json.dumps(d), headers=headers)
rs=r.status_code
if rs==201:
    print('sucess')


#
# # update
# #get content
# url = "https://api.github.com/repos/vinkine/Top7/contents/public/"+ fn
# r=requests.get(url=url,headers=headers)
# if r.status_code==200:
#     sha=json.loads(r.text)['sha']
# else:
#     sha=''
# print(sha)
#
# d={
#   "message": "my commit message update",
#   "committer": {
#     "name": "Scott Chacon",
#     "email": "schacon@gmail.com"
#   },
#   "content": fn_base64(fn),
#     "sha":sha
# }
#
# r = requests.put(url=url,data=json.dumps(d), headers=headers)
#
# print(r.status_code)