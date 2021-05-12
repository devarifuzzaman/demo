
			$(function () {
				var acarousel = $("#carousel").acarousel();

				changeActive();

				$("#carousel li a").click(function () {
					if (acarousel.isAnim()) return false;

					var move = acarousel.moveByElem($(this).parent());
					if (move == 0) {
						alert("Move 0");
					} else {
						changeActive(move);
					}
					return false;
				});

				$("#move_back").click(function () {
					if (acarousel.isAnim()) return false;

					var move = acarousel.move(1);
					changeActive(move);
					return false;
				});

				$("#move_next").click(function () {
					if (acarousel.isAnim()) return false;

					var move = acarousel.move(-1);
					changeActive(move);
					return false;
				});

				$(".move").click(function () {
					if (acarousel.isAnim()) return false;

					var index = $(".move").index(this);
					var move = acarousel.moveByIndex(index);
					changeActive(move);
					return false;
				});

				function changeActive(move) {
					var index = acarousel.getPos(move).index;
					$(".move").removeClass("active").eq(index).addClass("active");
				}

				$(window).resize(function () {
					var parent = $("#carousel_container");
					var self = $("#carousel");
					self.css({
						left: parent.width() / 2 - self.width() / 2,
						top: parent.height() / 2 - self.height() / 2
					});
				}).trigger("resize");

			});
		


	
			try {
				fetch(new Request("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", {
					method: 'HEAD',
					mode: 'no-cors'
				})).then(function (response) {
					return true;
				}).catch(function (e) {
					var carbonScript = document.createElement("script");
					carbonScript.src = "//cdn.carbonads.com/carbon.js?serve=CK7DKKQU&placement=wwwjqueryscriptnet";
					carbonScript.id = "_carbonads_js";
					document.getElementById("carbon-block").appendChild(carbonScript);
				});
			} catch (error) {
				console.log(error);
			}
	
			var _gaq = _gaq || [];
			_gaq.push(['_setAccount', 'UA-36251023-1']);
			_gaq.push(['_setDomainName', 'jqueryscript.net']);
			_gaq.push(['_trackPageview']);

			(function () {
				var ga = document.createElement('script');
				ga.type = 'text/javascript';
				ga.async = true;
				ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') +
					'.google-analytics.com/ga.js';
				var s = document.getElementsByTagName('script')[0];
				s.parentNode.insertBefore(ga, s);
			})();




			$(function () {
  var range = $("#range")[0];
  var percent = ((range.value - range.min) / (range.max - range.min)) * 5;
  var percentshow = Math.round(
    ((range.value - range.min) / (range.max - range.min)) * 100
  );
  if (percent < 5) {
    $(".progress .circle").attr("style", "animation-delay:-" + percent + "s");
    $("body").append(
      "<div id='meterstyle'><style>.progress:after{animation-delay:-" +
        percent +
        "s;}</style></div>"
    );
  } else {
    $(".progress .circle").attr("style", "animation-delay:5s");
    $("body").append(
      "<div id='meterstyle'><style>.progress:after{animation-delay:5s;}</style></div>"
    );
  }
  $(".progress .precent").text(percentshow + " km/h");
  $(document).on("input", "#range", function () {
    var percent = ((this.value - this.min) / (this.max - this.min)) * 5;
    var percentshow = Math.round(
      ((this.value - this.min) / (this.max - this.min)) * 100
    );
    $("#meterstyle").remove();
    if (percent < 5) {
      $(".progress .circle").attr("style", "animation-delay:-" + percent + "s");
      $("body").append(
        "<div id='meterstyle'><style>.progress:after{animation-delay:-" +
          percent +
          "s;}</style></div>"
      );
    } else {
      $(".progress .circle").attr("style", "animation-delay:5s");
      $("body").append(
        "<div id='meterstyle'><style>.progress:after{animation-delay:5s;}</style></div>"
      );
    }
    $(".progress .precent").text(percentshow + " km/h");
  });
});

		