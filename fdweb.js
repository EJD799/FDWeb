function openDialog(id) {
  dlg = document.getElementById(id)
  dlg.setAttribute("class", "fluent-dialog-container")
}
function closeDialog(id) {
  dlg = document.getElementById(id)
  dlg.setAttribute("class", "fluent-dialog-container hidden")
}
