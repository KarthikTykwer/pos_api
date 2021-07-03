$(document).ready(function(){
    $('#btnAddProductMapping').click(function(){
        $('#divProductDetailsList').hide();
        $('#divMapCategoryProduct').show();
    });

    $('#btnSaveProductMapping').click(function(){
        $('#divProductDetailsList').show();
        $('#divMapCategoryProduct').hide();
    });

    $('#btnCancelProductMapping').click(function(){
        $('#divProductDetailsList').show();
        $('#divMapCategoryProduct').hide();
    });

    $('#btnAddCategory').click(function(){
        $('#divMapCategoryProduct').hide();
        $('#divAddCategory').show();
    });

    $('#btnSaveCategory').click(function(){
        $('#divMapCategoryProduct').show();
        $('#divAddCategory').hide();
    });

    $('#btnCancelCategory').click(function(){
        $('#divMapCategoryProduct').show();
        $('#divAddCategory').hide();
    });
});