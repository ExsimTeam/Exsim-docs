# websocket

## path
/edit


## onOpen
### param
```json
{
    "utoken":""
}
```
### response
successfully connected
```json
{
    "code":1,
    "msg":"success",
    "opcode":-1,
    "data":null
}
```

unauthorized
```json
{
    "code":401,
    "msg":"unauthorized",
    "opcode":-1,
    "data":null
}
```


## onMessage

### message
save a cell
```json
{
    "opcode":0,
    "data":{
        "sheetId":0,
        "row":1,
        "col":1,
        "value":"",
        "format":""
    },
    "sender":"xxx"
}
```

add sheet
```json
{
    "opcode":1,
    "data":"sheet1",//直接放新的工作表的名称
    "sender":"xxx"
}
```

delete sheet
```json
{
    "opcode":2,
    "data":"0",//放要删除的工作表ID，注意需要是数字字符串
    "sender":"xxx"
}
```

modify sheet name
```json
{
    "opcode":3,
    "data":{
        "sheetId":0,
        "sheetName":""
    },
    "sender":"xxx"
}
```

```json
{
    "opcode":5,
    "data":null,
    "sender":"xxx"
}
```




### response
成功发送到服务器并转发给其他会话，opcode=-1表示服务器发出的消息，其他是直接转发客户端发来的消息
```json
{
    "code":1,
    "msg":"success",
    "opcode":-1,
    "data":null
}
```
发送的消息格式有误，没有成功解析JSON
```json
{
    "code":400,
    "msg":"bad request",
    "opcode":-1,
    "data":null
}
```

unauthorized
```json
{
    "code":401,
    "msg":"unauthorized",
    "opcode":-1,
    "data":null
}
```
没有写的权限
```json
{
    "code":401,
    "msg":"unauthorized",
    "opcode":-1,
    "data":null
}
```


## onClose
关闭连接