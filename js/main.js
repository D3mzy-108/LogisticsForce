$(document).ready(function () {
        $('*').addClass('light')
        $("#menubtn").click(() => {
          $("nav").toggleClass("active")
          $("#menubtn i").toggleClass("fa-bars").toggleClass("fa-close")
        })
        $("nav a").click((e) => {
          $("nav li").removeClass("active");
          $(e.target.parentElement).addClass("active");
        });
        $("header a").click((e) => {
          $("header li").removeClass("active");
          $(e.target.parentElement).addClass("active");
        });
        $(".change_theme").click(() => {
          $("*").toggleClass("light");
          $(".cont .cng_txt")
            .toggleClass("text-light")
            .toggleClass("text-dark");
        });
        routeDetails()
        $(".rt td").click((e) => {
          $("tr").removeClass("active");
          $(e.target.parentElement).addClass("active");
          routeDetails()
          window.location.replace("admin.html#route_details")
        });

        function routeDetails() {
            $("#route_details #no_of_sold_tickets span").text($(".rt tr.active td:nth-child(5)").text());
            $("#route_details #no_of_void_tickets span").text($(".rt tr.active td:nth-child(6)").text()); 
            
            var no_of_penalties = 0;
            var index = 1;
            var fines = 0;
            var obj
            var compare

            do {
              if(document.querySelector(`.fn table tr:nth-child(${index + 1}) td:nth-child(3)`).textContent == document.querySelector(".rt tr.active td:nth-child(2)").textContent){
                no_of_penalties += 1;
                fines += parseInt($(`.fn table tr:nth-child(${index + 1}) td:nth-child(4)`).text())
              }
              $(".no_of_pen").text(no_of_penalties)
              $(".no_of_fin").text(fines)

              index++;
            } while (index < $(".fn table tr").length);
        }

        const ctx = document.getElementById("myChart").getContext("2d");
        const myChart = new Chart(ctx, {
          type: "bar",
          data: {
            labels: ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"],
            datasets: [
              {
                label: "#ticket sales in 7 days",
                data: [12, 19, 3, 5, 2, 3, 7],
                backgroundColor: [
                  "rgba(255, 99, 132, 0.5)",
                  "rgba(54, 162, 235, 0.5)",
                  "rgba(255, 206, 86, 0.5)",
                  "rgba(75, 192, 192, 0.5)",
                  "rgba(153, 102, 255, 0.5)",
                  "rgba(255, 159, 64, 0.5)",
                ],
                borderColor: [
                  "rgba(255, 99, 132, 1)",
                  "rgba(54, 162, 235, 1)",
                  "rgba(255, 206, 86, 1)",
                  "rgba(75, 192, 192, 1)",
                  "rgba(153, 102, 255, 1)",
                  "rgba(255, 159, 64, 1)",
                ],
                borderWidth: 1,
              },
            ],
          },
          options: {
            plugins: {
              legend: {
                labels: {
                  // This more specific font property overrides the global property
                  font: {
                    family: "sans-serif",
                    weight: "500",
                    size: 10,
                  },
                },
              },
            },
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          },
        });
        const radar_ctx = document.getElementById("radar_ctx").getContext("2d");

        const radar = new Chart(radar_ctx, {
          type: "radar",
          data: {
            labels: ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"],
            datasets: [
              {
                label: "Sold",
                data: [505, 425, 310, 236, 95, 467, 350],
                fill: true,
                backgroundColor: "rgba(54, 162, 235, 0.2)",
                borderColor: "rgb(54, 162, 235)",
                pointBackgroundColor: "rgb(54, 162, 235)",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "rgb(255, 99, 132)",
              },
              {
                label: "Voided",
                data: [100, 198, 140, 119, 50, 193, 115],
                fill: true,
                backgroundColor: "rgba(255, 99, 132, 0.2)",
                borderColor: "rgb(255, 99, 132)",
                pointBackgroundColor: "rgb(255, 99, 132)",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "rgb(54, 162, 235)",
              },
            ],
          },
          options: {
            elements: {
              line: {
                borderWidth: 3,
              },
            },
          },
        });


});

      // USER / DRIVER PAGE INPUT FUNCTIONALITY
      function isNumberKey(evt) {
        var charCode = evt.which ? evt.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
          return false;
        }
        return true;
      }
      function addHyphen(element) {
        let ele = document.getElementById(element.id);
        ele = ele.value.split("-").join(""); // Remove dash (-) if mistakenly entered.

        let finalVal = ele.match(/.{1,3}/g).join("-");
        document.getElementById(element.id).value = finalVal;
      }



      function toggleRightSideBar(params) {
        window.location.replace("user.html#rightsidebar")
      }
