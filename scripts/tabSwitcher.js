function hideOtherTabs(tabList, tab, tabPrefix) {
  for (let index = 0; index < tabList.length; index++) {
    if (tabPrefix + tab !== tabPrefix + tabList[index]) {
      //check to see which tabs are
      document.getElementById(tabPrefix + tabList[index]).style.display =
        "none";
      document.getElementById(tabList[index]).classList.remove("active");
    }
  }
}

document.addEventListener("DOMContentLoaded", function () {
  let tabPrefix = "home-";
  let tabs = ["tab1", "tab2", "tab3"];

  //clear all active pages
  for (let index = 0; index < tabs.length; index++) {
    document.getElementById(tabPrefix + tabs[index]).style.display = "none";
  }
  //set default active page
  document.getElementById("home-tab2").style.display = "block";

  //check which element the click event occurs on, display to block
  const tabLinks = document.querySelectorAll("ul.tab-links li");
  tabLinks.forEach(function (tabLink) {
    tabLink.addEventListener("click", function () {
      let tabID = this.id;
      document.getElementById(tabPrefix + tabID).style.display = "block";
      document.getElementById(tabID).classList.add("active");
      // hide all other tabs
      hideOtherTabs(tabs, tabID, tabPrefix);
    });
  });
});
