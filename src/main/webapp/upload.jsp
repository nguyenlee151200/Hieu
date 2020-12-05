<%--
  Created by IntelliJ IDEA.
  User: Admin
  Date: 8/6/2020
  Time: 5:58 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html lang="en">
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Upload File - Hưngdz</title>
</head>
<body>
<h1>Demo Upload file with Servlet</h1>
<form method="post" action="upload-file" enctype="multipart/form-data">
    <label>Select files to upload: </label> <br/>
    <input type="file" name="file" multiple="multiple"/> <br/>
    <input type="submit" value="Upload"/>
</form>
</body>
</html>
