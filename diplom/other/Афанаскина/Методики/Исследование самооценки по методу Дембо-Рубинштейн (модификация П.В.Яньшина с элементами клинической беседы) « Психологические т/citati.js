
jQuery(document).ready(function($) {

  $("#citatiThemes").autocomplete("http://vsetesti.ru", {
    multiple: true,
    extraParams: { action:'suggest', tax:'citati' },
    minChars: 0
  });
  $("#citatiThemesLimited").autocomplete("http://vsetesti.ru", {
    multiple: true,
    mustMatch: true,
    extraParams: { action:'suggest', tax:'citati' },
    minChars: 0
  });
  
});