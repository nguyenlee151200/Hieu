var urlCategory = "category/";

function categoryFindAll() {
    return ajaxGet(`${urlCategory}fill-all`);
}
function categoryFindById() {
    return ajaxGet(`${urlCategory}find-by-id?id=${id}`);
}