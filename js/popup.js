const $jqe = jQuery.noConflict();

$jqe(document).ready(function () {
    setTimeout(function () {
        $jqe(".popup").addClass("visible");
    }, 4000);
    $jqe(".close").on("click", function() { $jqe(".popup").removeClass("visible");});
    $jqe("#show-dialog").on("click", function() { $jqe(".popup").addClass("visible");});
  });

  