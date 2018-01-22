$(document).ready(function() {
  $("#passbut").click(function() {
    var bankNo = $("#input_1").val();
    if (bankNo == null || bankNo == '' || bankNo == undefined) {
      show_pop(0, "请输入您的银行卡号");
      return;
    } else {
      if (bankNo.length <= 10 || isNaN(bankNo)) {
        show_pop(0, "请输入正确的银行卡号");
        return;
      }
    }
    
    $.ajax({
      type: 'POST',
      url: 'card/checkCard.do',
      data: {
        cardNo: bankNo
      },
      dataType: 'json',
      success: function(data) {
    	  if (data != null) {
    		  console.info(data);
    		  if (data.success) {
    			  window.location.href = "personalcard.html?bankBin=" + bankNo;
    		  } else {
    			  show_pop(0, data.msg);
    		  }
		}
      },
      error: function() {
        show_pop(0, "请求失败");
      }
    });
  });
});

