let btnThem,textSearchTen,btnTimKiem,tableDuLieu,textTen,btnLuu,btnXacNhanXoa;
let indexCategory,elementCategory;

let listCategory = [
    {
        id: 1,
        name: "Coffee 1",
    },
    {
        id: 2,
        name: "Coffee 2",
    },
];
$( async function () {
    //gọi api trả về 2 th then trả về thành công
    //cath trả về lỗi
    await categoryFindAll().then(rs =>{
        if (rs.message == "success"){
            listCategory = rs.data;
        }
        else {
            console.log(rs.data);
        }

    }).catch(err =>{
        console.log(err);
    })

})
$(function () {
    btnThem = $("#btn-them");
    textSearchTen = $("#input-search-ten");
    btnTimKiem = $("#btn-tim-kiem");
    tableDuLieu = $("tbody");
    textTen = $("#input-ten");
    btnLuu = $("#btn-luu-lai");
    btnXacNhanXoa = $("#btn-xac-nhan-xoa");
    viewDanhSachSanPham();
    searchSanPham();
    xacNhanXoaSanPham();
    luuSanPham();
    themSanPham()

})
function viewDanhSachSanPham() {
    let view = "<tr><td colspan='8'><strong>Không có dữ liệu !</strong></td></tr>";
    if (listCategory && listCategory.length > 0) {
        view = listCategory.map((data, index) => {
            //cú pháp template string trong đó cho phép thực hiện các phép toán
            return `<tr data-index = "${index}">
                                <th scope="row">${index + 1}</th>
                                <td>${viewField(data.name)}</td>
                                <td class="text-center">
                                    <button type="button" class="btn btn-warning mt-1 sua-san-pham" ><i class="fas fa-pencil-alt"></i> Sửa</button>
                                    <button type="button" class="btn btn-danger mt-1 xoa-san-pham" ><i class="fas fa-trash-alt"></i> Xóa</button>
                                </td>
                            </tr>`
        }).join("");
    }
    tableDuLieu.html(view);
            xoaSanPham();
            suaSanPham();
}
function searchSanPham() {
    btnTimKiem.click(function () {
        let valSearchTen = textSearchTen.val();
        listCategory=[];
        viewDanhSachSanPham();
    })
}
function xoaSanPham() {
    $(".xoa-san-pham").click(function () {
        indexCategory = $(this).parents("tr").attr("data-index");
        $("#exampleModal1").modal("show");
    })
}
function xacNhanXoaSanPham() {
    btnXacNhanXoa.click(function () {
        let idCategory = listCategory[parseInt(indexCategory)].id;
        listCategory = listCategory.filter((data,index) =>{
            return index != indexCategory;
        })
        viewDanhSachSanPham();
        $("#exampleModal1").modal("hide");
    })
}
function suaSanPham() {
    $(".sua-san-pham").click(function () {
        elementCategory = listCategory[$(this).parents("tr").attr("data-index") - 0];
        textTen.val(elementCategory.name);
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
    return {val,check}
}
function luuSanPham() {
    btnLuu.click(function () {
        let {val:valTen, check:checkTen} = checkData(textTen, "Định dạng tên chưa đúng");
        if (checkTen){
            let checkAction = false;//true là sửa false là thêm
            if (elementCategory){
                checkAction = true;
            }
            else {
                elementCategory ={};
            }
            elementCategory.name = valTen;
            console.log(checkAction);
            if (checkAction){
                listCategory[indexCategory] = elementCategory;
                console.log("save");
            }
            else{
                listCategory.push(elementCategory);
            }
            viewDanhSachSanPham();
            $("#exampleModal").modal("hide");}

    })
}
function themSanPham() {
    btnThem.click(function () {
        elementCategory = null;
        $("#exampleModal").modal("show");
    })

}