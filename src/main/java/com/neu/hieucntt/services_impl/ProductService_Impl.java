package com.neu.hieucntt.services_impl;


import com.neu.hieucntt.model.Product;
import com.neu.hieucntt.services.ProductService;

import java.sql.SQLException;
import java.util.List;

public class ProductService_Impl implements ProductService {
    @Override
    public Product insert(Product product) throws SQLException {
        //trước khi thêm thì phải kiểm tra category có tồn tại hay ko
        return null;
    }

    @Override
    public boolean update(Product product) throws SQLException {
        //trước khi sửa thì phải kiểm tra category có tồn tại hay ko
        return false;
    }

    @Override
    public boolean delete(int id) throws SQLException {
        return false;
    }

    @Override
    public List<Product> findAll() throws SQLException {
        return null;
    }

    @Override
    public Product findById(int id) throws SQLException {
        return null;
    }

    @Override
    public List<Product> search(String name, String startDate, String endDate, Boolean soldOut, int guarantee, int category, int bouth, int promotion) throws SQLException {
        return null;
    }

    @Override
    public List<Product> sortBy(String field, boolean isAsc) throws SQLException {
        return null;
    }

    @Override
    public List<Product> findByCategory(int idCategory) throws Exception {
        return null;
    }
}
