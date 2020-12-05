//cú phấp để đảm bảo tất cả các phần tử đã được load xong
// để có thể thực hiện thao tác lên nó

//B1 định nghĩa các thành phần cần phải thao tác
let btnThem,selectSearchDanhMuc,selectSearchSapXep,textSeachTen,textSearchGia,numberSearchGia,numberSearchDaBan,dateSearchNgayTao,selectSearchConHang,btnTimKiem,tableDuLieu,textTen,selectDanhMuc,numberGia,numberDaBan,numberBaoHanh,numberKhuyenMai,fileAnh,dateNgayTao,textareaGioiThieu,textareaThongSo,checkboxHetHang,btnLuu,btnXacNhanXoa;
let indexProduct,elementProduct;
//hàm này sẽ chạy cacs dòng lệnh ở trong nó khi caccs phần tử html đã được tải hết
let listProduct = [
    {
        id: 1,
        name: "Coffee 1",
        price: 10000,
        createDate: "2020-08-20",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2oxRa7mX65wYfLjU7LJ1eO_lq3oN6VOebig&usqp=CAU",
        introduction: "Coffee",
        specification: "Coffee",
        soldOut: true,
        guarantee: 12,
        categoryId: 1,
        bouth: 1000,
        promotion: 10
    },
    // {
    //     id: 2,
    //     name: "Coffee 2",
    //     price: 10000,
    //     createDate: "2020-08-20",
    //     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQESo0_K4vUIJVZwL0IaZysDj2c1AgFdKoVyQ&usqp=CAU",
    //     introduction: "Coffee đen",
    //     specification: "Đen",
    //     soldOut: false,
    //     guarantee: 12,
    //     categoryId: 2,
    //     bouth: 1000,
    //     promotion: 10
    // },
];
$(function () {
    btnThem = $("#btn-them");
    selectSearchDanhMuc = $("#select-search-danh-muc");
    selectSearchSapXep = $("#select-search-sap-xep");
    textSeachTen = $("#input-search-ten");

    numberSearchGia = $("#input-search-gia");
    numberSearchDaBan = $("#input-search-da-ban");
    dateSearchNgayTao = $("#input-ngay-tao");
    selectSearchConHang = $("#select-search-het-hang");
    btnTimKiem = $("#btn-tim-kiem");
    tableDuLieu = $("tbody");
    textTen = $("#input-ten");
    selectDanhMuc = $("#select-loai-san-pham");
    numberGia = $("#input-gia");
    numberDaBan = $("#input-da-ban");
    numberBaoHanh = $("#input-bao-hanh");
    numberKhuyenMai = $("#input-khuyen-mai");
    fileAnh = $("#file-anh");
    dateNgayTao = $("#input-ngay-tao");
    textareaGioiThieu = $("#textarea-gioi-thieu");
    textareaThongSo = $("#textarea-thong-so");
    checkboxHetHang = $("#checkbox-het-hang");
    btnLuu = $("#btn-luu-lai");
    btnXacNhanXoa = $("#btn-xac-nhan-xoa");
    viewDanhSachSanPham();
    searchSanPham();
    xacNhanXoaSanPham();
    luuSanPham();
    themSanPham();
})
//B2: tạo ra các hàm thao tác
//cần phải thao tác với một list sản phẩm được trả về từ api
function viewDanhSachSanPham() {
let view="<tr><td colspan='8'><strong>Không có dữ liệu !</strong></td></tr>";
    //hàm này có chức năng là xóa hết các html cũ và in vào html mới truyền vào
if (listProduct && listProduct.length > 0){
    // map thực hiện duyệt lần lượt các phân tử trong mảng và nếu
    //return sẽ trả về 1 mảng mới là kết quả vừa thao tác được.
    view = listProduct.map((data,index) =>{
        //teamplate string
        // nó sẽ là một chuỗi cho phép thực hiện các phép toán trong cú pháp ${}
        return ` <tr data-index="${index}">
                            <th scope="row">${index + 1}</th>
                            <td><img src="${data.image}" alt="" width="80px"></td>
                            <td>${viewField(data.name)}</td>
                            <td>${viewField(data.price)}</td>
                            <td>${viewField(data.bouth)}</td>
                            <td>${viewField(data.createDate)}</td>
                            <td class="text-center">${data.soldOut ?`<span class="badge badge-danger">Hết Hàng</span>` : `<span class="badge badge-success">Còn hàng</span>`}</td>
                            <td>
                                <button type="button" class="btn btn-warning sua-san-pham"><i class="fas fa-pen"></i>
                                    Sửa</button>
                                <button type="button" class="btn btn-danger xoa-san-pham" ><i class="fas fa-trash-alt"></i>
                                    Xóa</button>
                            </td>
                        </tr>`
    }).join("");
    //console.log(tmp);
}
    tableDuLieu.html(view);
    xoaSanPham();
    suaSanPham();
}
function searchSanPham() {
    //gán sự kiến click cho nút và khi sự kiện xảy ra sẽ thực hiện các lệnh trong function
    btnTimKiem.click(function () {
        //B1: lấy ra các giá trị là các thông tin cần tìm kiếm và xử lý đầu vào các thông tin đấy;
    let valSearchTen = textSeachTen.val();
    let valSearchGia = numberSearchGia.val();
    valSearchGia = valSearchGia.length >0 ? valSearchGia : -1;
    let valSearchDaBa = numberSearchDaBan.val();
    valSearchDaBa = valSearchDaBa.length >0 ? valSearchDaBa : -1;
    let valSearchNgayTao = dateSearchNgayTao.val();
        valSearchNgayTao = valSearchNgayTao.length >0 ? valSearchGia : null;
     let valSearchConHang = selectSearchConHang.val();
    valSearchConHang = valSearchConHang !=0 ? valSearchConHang : null;
    //trước khi gọi hàm search thì phải kiểm tra các trường hợp đầu vào như api quy định
    //call api truyền vào các tham số để tìm kiếm .api trả về kết quả là một list sản phẩm phù hợp với tìm kiếm
        //sau đó gán list trả về với listProdeuct và sau đấy view lại
        listProduct=[];
        viewDanhSachSanPham();
    })
}
function xoaSanPham() {
    //xóa có 2 bước
    //đầu tiên click xóa sản phẩm thì sẽ thwucj hiện chức năng là ra idd của sản phẩm đấy
    //sau khi đã lấy ra được id thì mới mở modal xác nhận xóa lên
    //khi người dùng chấp nhận xóa thì mới gọi api
    //và nếu xóa thành công thì cập nhập lại list và view lại.
    $(".xoa-san-pham").click(function () {
        //khi click vào một nút nào đó thì từ khóa thsis hiện tại chính là phẩn từ vừa click
        //.parents cho phép tìm kiếm các pần tử cha của phần tử hiện tại
        //.attr("name") name ở đây là key của một gias trị cần lấy
        indexProduct =$(this).parents("tr").attr("data-index");
        //phải đảm bảo được indexProduct tương ứng với nút xóa mình vừa click;
        $("#exampleModal1").modal("show");
    })
}
function xacNhanXoaSanPham() {
    btnXacNhanXoa.click(function () {
    let idProduct= listProduct[parseInt(indexProduct)].id;
    //gọi api xóa sản phẩm nếu thành công trả về true;
        //thực hiện xóa sản phẩm có indexx tương ứng trong mảng
        listProduct = listProduct.filter((data,index) =>{
            return index != indexProduct;
        })
        viewDanhSachSanPham();
        $("#exampleModal1").modal("hide");
    })
}
function suaSanPham() {
    $(".sua-san-pham").click(function () {
        elementProduct = listProduct[$(this).parents("tr").attr("data-index") -0 ];
        textTen.val(elementProduct.name);
        selectDanhMuc.val(elementProduct.categoryId);
        numberGia.val(elementProduct.price);
        numberDaBan.val(elementProduct.bouth);
        numberBaoHanh.val(elementProduct.guarantee);
        numberKhuyenMai.val(elementProduct.promotion);
        dateNgayTao.val(elementProduct.createDate);
        textareaGioiThieu.val(elementProduct.introduction);
        textareaThongSo.val(elementProduct.specification);
        checkboxHetHang.prop("checked", elementProduct.soldOut);
        $("#exampleModal").modal("show");
    })
}
function checkData(selector,textError) {
    let val =$(selector).val();
    let check = false;
    if (val.length >0){
        check = true;
        hiddenError(selector);
    }
    else {

        viewError(selector,textError);
    }
    //trả về đối tượng có 2 thuộc tính val và check thuộc tính val mang giá trị của val
    //thuộc tính check mang giá trị của check
    return {val,check}
}
function luuSanPham() {
    btnLuu.click(function () {
    //sửa
        //mỗi trường người dùng nhập vào đều phải kiểm tra bằng hàng chekcData
        //hàng check dât trả về 2 giá trị val và check
        //
        let {val:valTen, check:checkTen} = checkData(textTen, "Định dạng tên chưa đúng");
        let valDanhMuc = selectDanhMuc.val();
        let {val:valGia, check:checkGia}= checkData(numberGia, "Giá bán phải là số");
        let {val:valDaBan, check:checkDaBan}= checkData(numberDaBan, "Nhập số lượng đã bán");
        let {val:valBaoHanh, check:checkBaoHanh}= checkData(numberBaoHanh, "Nhập thời gian bảo hành");
        let {val:valKhuyenMai, check:checkKhuyenMai}= checkData(numberKhuyenMai, "Nhập phần trăm khuyến mãi");
        let valGioiThieu = textareaGioiThieu.val();
        let valThongSo = textareaThongSo.val();
        let valHetHang = checkboxHetHang.is(":checked");
        //nếu tất cả chính xác định dạng thì gán lại các giá trị vào
        if (checkTen && checkGia && checkDaBan && checkBaoHanh && checkKhuyenMai ){
            let checkAction = false;//true là sửa false là thêm
            if (elementProduct){
                checkAction = true;
            }
            else {
                elementProduct ={};
            }
            elementProduct.name = valTen;
            elementProduct.categoryId = valDanhMuc;
            elementProduct.price = valGia;
            elementProduct.bouth = valDaBan;
            elementProduct.guarantee = valBaoHanh;
            elementProduct.promotion = valKhuyenMai;
            elementProduct.introduction = valGioiThieu;
            elementProduct.specification = valThongSo;
            elementProduct.soldOut = valHetHang;
            console.log(checkAction);
            if (checkAction){
                //sau khi thay đổi các trường xong gọi đén api nếu api trả về true thì gán đối tượng api trả về vào listProduct ứng với index của nó lúc đầu
                listProduct[indexProduct] = elementProduct;
                //sau đấy gọi lại view danh sách sản phẩm

                console.log("save");
                //sau khi save thành công thì phải đóng model
            }
            else{
                // thêm sản phẩm
                //gọi api thêm sản phẩm nếu thành công api sẽ trả về một đối tượng
                //vừa được thêm vào đã có id
                // nếu thành công push đối tuwognj mới vào mảng list Product
                //thwucj hiện hiện view lại danh sacsh
                listProduct.push(elementProduct);//element product là đối tượng api
        }
            viewDanhSachSanPham();
            $("#exampleModal").modal("hide");}
    })
}
function themSanPham() {
    btnThem.click(function () {
        elementProduct = null;
        $("#exampleModal").modal("show");
    })

}