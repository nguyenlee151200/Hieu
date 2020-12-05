<%--
  Created by IntelliJ IDEA.
  User: Admin
  Date: 8/13/2020
  Time: 6:51 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<link rel="stylesheet" href="resource/css/login.css"/>
<div class="main-content page-login">
    <div class="container">
        <div class="row justify-content-center align-items-center">
            <div class="col-6 col-md-4">
                <div class="card">
                    <div class="card-body">
                        <div class="card-title text-center">
                            <img src="https://www.google.com/url?sa=i&url=http%3A%2F%2Fwww.otuzaltinciparalel.com%2Finden.asp%3Fcid%3D1%26zhen%3Ddls%2B18%2Badidas%2Blogo%26xi%3D3%26xc%3D23%26pr%3D68.99&psig=AOvVaw3CsPo-hEcgXJf_abjzUJaR&ust=1601081222501000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIiYlcSKg-wCFQAAAAAdAAAAABAZ"
                                 width="60" class="d-inline-block align-top" alt="">
                            <h3>Đăng nhập</h3>
                        </div>
                        <div class="form-login">
                            <div class="col-12">
                                <div class="form-group">
                                    <label>Tài khoản</label>
                                    <input type="text" class="form-control" id="username" placeholder="Nhập tài khoản">
                                    <div class="invalid-feedback">
                                        Error!
                                    </div>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="form-group">
                                    <label>Mật khẩu</label>
                                    <input type="password" class="form-control" id="password" placeholder="Nhập mật khẩu">
                                    <div class="invalid-feedback">
                                        Error!
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 text-center">
                                <button type="button" class="btn btn-secondary" id="btn-login">Đăng nhập</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
