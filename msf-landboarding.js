var childs_name, age, gender, city, select, checkbox, input, name, budget, email, phone;
var we_tabs_next_button = '[bloc=next-step]';
var we_tabs_prev_button = '[bloc=prev-step]';
var we_tabs_active_class = 'active';

var we_activeTab, we_indexOfActiveTab, we_indexOfNextTab, we_indexOfPrevTab, we_prevTab, we_amountOfTabs, nextTab;
var tabList = ['student'];

openTab(tabList[0]);

$(we_tabs_next_button).on("click", function () {
  // Проверяем, есть ли заполненные данные в переменных
  if (childs_name && age && gender && city && select && checkbox && input && name && budget && email && phone) {
    var activeTab = $(".w--tab-active").attr("data-w-tab");
    var indexOfActiveTab = tabList.indexOf(activeTab);
    var indexOfNextTab = indexOfActiveTab + 1;
    var nextTab = tabList[indexOfNextTab];
    var amountOfTabs = tabList.length;
    var attrNextTab = $('.w--tab-active').attr('next-tab');

    openTab(attrNextTab);

    attrNextTab = $('.w--tab-active').attr('next-tab');

    if (typeof attrNextTab !== 'undefined' && attrNextTab !== false) {
      $(we_tabs_next_button).addClass(we_tabs_active_class);
    } else {
      $(we_tabs_next_button).removeClass(we_tabs_active_class);
    }

    if (amountOfTabs > 1) {
      $(we_tabs_prev_button).addClass(we_tabs_active_class);
    }
  }
});

$(we_tabs_prev_button).on("click", function () {
  var activeTab = $(".w--tab-active").attr("data-w-tab");
  var indexOfActiveTab = tabList.indexOf(activeTab);
  var indexOfPrevTab = indexOfActiveTab - 1;
  var prevTab = tabList[indexOfPrevTab];

  var attrPrevTab = $('.w--tab-active').attr('prev-tab');

  if (indexOfActiveTab > 0) {
    openTab(attrPrevTab);
    $(we_tabs_next_button).addClass(we_tabs_active_class);
  }

  if (indexOfActiveTab <= 1) {
    $(we_tabs_prev_button).removeClass(we_tabs_active_class);
  } else {
    $(we_tabs_prev_button).addClass(we_tabs_active_class);
  }
});

function openTab(tab) {
  var tab_link = "a[data-w-tab=" + tab;
  tab = "div[data-w-tab=" + tab;

  $(tab).siblings().removeClass("w--tab-active");
  $(tab).addClass("w--tab-active");
  $(tab_link).siblings("a").removeClass("w--current");
  $(tab_link).addClass("w--current");
}
