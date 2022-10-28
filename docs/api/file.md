# File
## Overview
该模块主要用于文件相关操作

## /getFileList/{page}

分页获取当前用户有权限的文件，包括自己创建的和他人分享的

### Request
```
GET /api/file/getFileList/{page}
```


### Request body
```json
{

}
```

### Response
::: tabs#response

@tab 200

获取该用户的文件列表（分页）
```json
{
    "code": 1,
    "msg": "success",
    "data": {
        "files": [
            {
                "id": 15,
                "fileName": "test1",
                "createdTime": "2022-10-20 19:03:20",
                "lastModifyTime": "2022-10-20 19:03:20",
                "authorUserId": 1,
                "authorUsername": "FUCK",
                "property": 1
            },
            {
                "id": 14,
                "fileName": "test1",
                "createdTime": "2022-10-20 19:01:35",
                "lastModifyTime": "2022-10-20 19:01:35",
                "authorUserId": 1,
                "authorUsername": "FUCK",
                "property": 1
            }
        ],
        "total":2,  //数据总量
        "size": 20, //每一页数据量
        "current": 1 //当前页码
    }
}
```



## /newFile

新建文件

### Request
```
POST /api/file/newFile
```


### Request body
```json
{
  "fileName":"",
  "description":"",  //可以为空
  "property":1// 1 is public ,0 is private 
}
```

### Response
::: tabs#response

@tab 200

新建文件ID
```json
{
    "code": 1,
    "msg": "success",
    "data": {
        "fileId":1
    }
}
```

## /deleteFile

删除文件

### Request
```
POST /api/file/deleteFile
```


### Request body
```json
{
  "fileId":1
}
```

### Response
::: tabs#response

@tab 200

```json
{
   "code": 1,
    "msg": "success"
}
```

## /shareFile

给予其他用户文件权限

### Request
```
POST /api/file/shareFile
```


### Request body
```json
{
  "shareToEmail":1,
  "permission":1,// 0 is read only,1 is read&write
  "fileId":1
}
```

### Response
::: tabs#response

@tab 200

```json
{
   "code": 1,
    "msg": "success",
    "data":{
      "username":"" //分享的用户名
    }
}
```
```json
{
   "code": 100,
    "msg": "file doesn't exist"
    
}
```

```json
{
   "code": 101,
    "msg": "user doesn't exist"
    
}
```

@tab 401
```
没有授权
```


## /openFile

获取文件body信息和建立websocket连接的utoken

### Request
```
GET /api/file/openFile
```


### Param
```json
{
    "fileId":1
}
```


### Response
::: tabs#response

@tab 200

```json
{
    "code": 1,
    "msg": "success",
    "data": {
        "utoken": "d5177f10-a1e7-428f-9220-2bf2b4b3d33d",
        "fileInfoVo": {
            "info": 1,//不需要关注（其实是懒得再创一个类）
            "sheetNum": 1,//工作表数目
            "sheets": {//工作表ID和名称的键值对
                "0": "工作表1"
            },
            "sheetPtr": 1//不需要关注
        }
    }
}
```
```json
{
   "code": 100,
    "msg": "file doesn't exist"
    
}
```


@tab 401
```
没有授权
```


## /getFileBody



### Request
```
GET /api/file/getFileBody
```

分页返回，如果没有数据则返回null
### Param
```json
{
    "fileId":1,
    "page":1,
    "sheetId":0
}
```


### Response
::: tabs#response

@tab 200

```json
{
    "rows":[
        {
            "row":1,
            "sheet":0,
            "1":{//第一列
                "value":"",
                "format":""
            },
            "2":{//第二列
                "value":"",
                "format":""
            }
        }
    ]
}
```

@tab 401
```
没有授权
```










