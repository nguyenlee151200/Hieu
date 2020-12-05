package com.neu.hieucntt.controller;

import com.neu.hieucntt.model.JsonResult;

import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.Part;
import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;
import java.util.List;

@WebServlet(name = "UploadFile", value = "/upload-file/*")
@MultipartConfig(fileSizeThreshold = 1024 * 1024 * 2,
        maxRequestSize = 1024 * 1024 * 50,
        maxFileSize = 1024 * 1024 * 50)
//fileSizeThreshold: Nếu kích thước của file upload lên lơn hơn định nghĩa
// thì hệ thống tự ghi file vào trực tiếp ổ cứng ko thông qua bộ đệm
//maxRequestSize: kích thước tối dâ của 1 request
//maxFileSize: kích thước tối đa của 1 file
public class Upload extends HttpServlet {

    private JsonResult jsonResult = new JsonResult();

    private static final String SAVE_DIRECTORY = "file-upload";

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String rs = "";
        try {
            // chưa các file mà mình upload lên;
            Collection<Part> partCollection = request.getParts();
            List<String> list = new ArrayList<>();
            // lấy ra thời gian gọi upload để tạo ra thư mục chưa các file upload đấy
            long time = new Date().getTime();
            for (Part part : partCollection) {
                String fileName = getFileName(part);
                if(fileName.length() > 0) {
                    //lấy ra đường dẫn thư mục upload file
                    //truyền time vào getFolderUpload để tạo ra thư mục
                    String filePath = getFolderUpload(time).getAbsolutePath() + File.separator + fileName;
                    System.out.println("Write file: " + filePath);
                    part.write(filePath);
                    list.add(SAVE_DIRECTORY+"/"+time+"/"+fileName);
                }
            }
            rs = jsonResult.jsonSuccess(list);
        } catch (Exception e) {
            e.printStackTrace();
            rs = jsonResult.jsonFail("upload fail");
        }
        response.getWriter().write(rs);
    }

    private File getFolderUpload(long time) {
        String appPath = "C:\\Sever\\apache-tomee-8.0.3-plume\\apache-tomee-plume-8.0.3\\webapps\\" + SAVE_DIRECTORY + "\\" + time; //cộng thêm đường dẫ để tạo thư mục chứa các file upload
        File folderUpload = new File(appPath);
        if(!folderUpload.exists()) {
            folderUpload.mkdirs();
        }
        return folderUpload;
    }

    private String getFileName(Part part) {
        String fileNameRs = "";
        //thuộc tính header của đối tượng part tương ứng với key content-disposition
        // thì sẽ chưa một một chuỗi có định dạng tương tự
        // form-data; name="file"; filename="C:\a\file1.zip"
        //từ chuỗi này mình lấy ra tên file và phần mở rộng của file.
        String contentDisp = part.getHeader("content-disposition");
        String[] items = contentDisp.split(";");
        for (String s: items) {
            if(s.trim().startsWith("filename")) {
                //filename="C:\file1.zip"
                fileNameRs = s.substring(s.indexOf("=") + 2, s.length() - 1);
                fileNameRs = fileNameRs.replace("\\", "/");
                int i = fileNameRs.lastIndexOf("/");
                fileNameRs = fileNameRs.substring(i + 1);
            }
        }
        return fileNameRs;
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}
