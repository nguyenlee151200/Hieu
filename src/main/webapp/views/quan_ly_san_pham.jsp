<%--
  Created by IntelliJ IDEA.
  User: Admin
  Date: 8/13/2020
  Time: 6:50 PM
  To change this template use File | Settings | File Templates.
--%>
<script src="resource/js/ajax/pages/ajax_page_quan_ly_san_pham.js"></script>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<main>
    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Chi tiết sản phẩm</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body form-custom">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>Tên</label>
                                <input type="text" class="form-control" id="input-ten" placeholder="Nhập tên">
                                <div class="invalid-feedback">
                                    Error!
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>Loại sản phẩm</label>
                                <select id="select-loai-san-pham" class="form-control select-loai-san-pham">
                                    <option value="1">Điện thoại</option>
                                    <option value="2">Cáp sạc</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>Giá</label>
                                <input type="number" class="form-control" id="input-gia"placeholder="Nhập giá">
                                <div class="invalid-feedback">
                                    Error!
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>Đã bán</label>
                                <input type="number" class="form-control" id="input-da-ban"placeholder="Nhập đã bán">
                                <div class="invalid-feedback">
                                    Error!
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>Bảo hành</label>
                                <input type="number" class="form-control" id="input-bao-hanh"placeholder="Nhập bảo hành">
                                <div class="invalid-feedback">
                                    Error!
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>Khuyến mãi</label>
                                <input type="number" class="form-control" id="input-khuyen-mai"placeholder="Nhập khuyến mãi">
                                <div class="invalid-feedback">
                                    Error!
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>Ảnh</label>
                                <input type="file" class="form-control-file" id="file-anh">
                                <div class="invalid-feedback">
                                    Error!
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>Ngày tạo</label>
                                <input type="date" class="form-control" id="input-ngay-tao"
                                       aria-describedby="emailHelp" disabled>
                                <div class="invalid-feedback">
                                    Error!
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>Giới thiệu</label>
                                <textarea class="form-control is-invalid" id="textarea-gioi-thieu"
                                          rows="3"></textarea>
                                <div class="invalid-feedback">
                                    Error!
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>Thông số</label>
                                <textarea class="form-control is-valid" id="textarea-thong-so"
                                          rows="3"></textarea>
                                <div class="invalid-feedback">
                                    Error!
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="checkbox-het-hang">
                                <label class="form-check-label" for="defaultCheck1">
                                    Hết hàng
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Đóng</button>
                    <button type="button" class="btn btn-success" id="btn-luu-lai">Lưu</button>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="exampleModal1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Xác nhận thao tác</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-12">
                                Bạn có chắc chắn xóa sản phẩm này không?
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Đóng</button>
                    <button type="button" class="btn btn-danger" id="btn-xac-nhan-xoa">Xóa</button>
                </div>
            </div>
        </div>
    </div>
    <div class="title_page">
        <div class="container">
            <div class="row">
                <div class="col-12 text-center">
                    <h1>Quản lý danh mục sản phẩm</h1>
                </div>
                <div class="col-12">
                    <hr />
                </div>
            </div>
        </div>
    </div>
    <div class="tool-page">
        <div class="container">
            <div class="row">
                <div class="col-md-8 mt-1">
                    <button id="btn-them"  type="button" class="btn btn-primary" ><i
                            class="fa fa-plus" aria-hidden="true"></i> Thêm
                        sản phẩm</button>
                </div>
                <div class="col-md-2">
                    <select class="form-control" id="select-search-danh-muc">
                        <option>Loại sản phẩm</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                    </select>
                </div>
                <div class="col-md-2 mt-1">
                    <select class="form-control" id="select-search-sap-xep">
                        <option>Press any key to continue</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
    <div class="table-data">
        <div class="container">
            <div class="row">
                <div class="table-responsive">
                    <table class="table table-hover table-bordered">
                        <thead>
                        <tr>
                            <th scope="col">STT</th>
                            <th scope="col" style="width: 100px;">Ảnh</th>
                            <th scope="col">Tên</th>
                            <th scope="col">Giá</th>
                            <th scope="col">Đã Bán</th>
                            <th scope="col">Ngày Tạo</th>
                            <th scope="col" style="width: 150px;">Còn Hàng</th>
                            <th scope="col" style="width: 175px;">Hành Động</th>
                        </tr>
                        <tr>
                            <th scope="row"></th>
                            <td></td>
                            <td><input type="text" class="form-control" id="input-search-ten"></td>
                            <td><input type="number" class="form-control" id="input-search-gia"></td>
                            <td><input type="number" class="form-control" id="input-search-da-ban"></td>
                            <td>
                                <input type="date" class="form-control" id="input-search-ngay-tao">
                            </td>
                            <td>
                                <select id="select-search-het-hang" class="form-control">
                                    <option selected value="0">Tất cả</option>
                                    <option value="false">Còn hàng</option>
                                    <option value="true">Hết hàng</option>
                                </select>
                            </td>
                            <td>
                                <button type="button" class="btn btn-primary" id="btn-tim-kiem"><i class="fas fa-search"></i> Tìm kiếm</button>
                            </td>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td><img src="https://cdn.cellphones.com.vn/.../iphone11-purple-select...
"
                                     alt="" width="80px"></td>
                            <td>Otto</td>
                            <td>Otto</td>
                            <td>Otto</td>
                            <td>Otto</td>
                            <td class="text-center"><span class="badge badge-success">Còn hàng</span></td>
                            <td>
                                <button type="button" class="btn btn-warning"><i class="fas fa-pen"></i>
                                    Sửa</button>
                                <button type="button" class="btn btn-danger xoa-san-pham"><i class="fas fa-trash-alt"></i>
                                    Xóa</button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td><img src="https://cdn.tgdd.vn/.../iphone-11-pro-max-green-600x600.jpg
"
                                     alt="" width="80px"></td>
                            <td>Thornton</td>
                            <td>Thornton</td>
                            <td>Thornton</td>
                            <td>Thornton</td>
                            <td class="text-center"><span class="badge badge-danger">Hết hàng</span></td>
                            <td>
                                <button type="button" class="btn btn-warning"><i class="fas fa-pen"></i>
                                    Sửa</button>
                                <button type="button" class="btn btn-danger xoa-san-pham" ><i class="fas fa-trash-alt"></i>
                                    Xóa</button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</main>