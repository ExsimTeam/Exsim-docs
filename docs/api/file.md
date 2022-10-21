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









