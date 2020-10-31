class UserApi {
  baseUrl = "https://spring-boot-1604154327452.azurewebsites.net";

  existsUsers = $.ajax({
    url: this.baseUrl + "/exists?id=12345",
    method: "GET",
    dataType: "json"
  })

}


