/* eslint-disable prettier/prettier */
const express = require('express');

const router = express.Router();
 


// Authentications all TABs.

router.get('/', function(req, res)
{
      res.locals = {  title: 'Login' };
      res.render('backend/Auth/login',{layout:false});
});

router.get('/pages-lock-screen', function(req, res)
{
      res.locals = {  title: 'Lock Screen' };
      res.render('backend/Auth/pages_lock_screen',{layout:false});
});

router.get('/pages-recoverpw', function(req, res)
{
      res.locals = {  title: 'Password Recovery' };
      res.render('backend/Auth/pages_recoverpw',{layout:false});
});

router.get('/pages-404', function(req, res)
{
      res.locals = {  title: '404 Page Error' };
      res.render('backend/Auth/pages_404',{layout:false});
});

router.get('/pages-500', function(req, res)
{
      res.locals = {  title: '500 Page Error' };
      res.render('backend/Auth/pages_500',{layout:false});
});


// Dashboard
router.get('/home', function (req, res) {
  res.locals = { title: 'Dashboard' };
  res.render('backend/Dashboard/dashboard');
});

// Calendar
router.get('/calendar', function (req, res) {
  res.locals = { title: 'Calendar' };
  res.render('backend/Calendar/calendar');
});

// Email
router.get('/email-inbox', function (req, res) {
  res.locals = { title: 'Email Inbox' };
  res.render('backend/Email/email_inbox');
});
router.get('/email-compose', function (req, res) {
  res.locals = { title: 'Email Compose' };
  res.render('backend/Email/email_compose');
});
router.get('/email-read', function (req, res) {
  res.locals = { title: 'Email Read' };
  res.render('backend/Email/email_read');
});

// UI Elements
router.get('/ui-alerts', function (req, res) {
  res.locals = { title: 'UI Alerts' };
  res.render('backend/UiElements/ui_alerts');
});
router.get('/ui-buttons', function (req, res) {
  res.locals = { title: 'UI Buttons' };
  res.render('backend/UiElements/ui_buttons');
});
router.get('/ui-badge', function (req, res) {
  res.locals = { title: 'UI Badge' };
  res.render('backend/UiElements/ui_badge');
});
router.get('/ui-cards', function (req, res) {
  res.locals = { title: 'UI Cards' };
  res.render('backend/UiElements/ui_cards');
});
router.get('/ui-carousel', function (req, res) {
  res.locals = { title: 'UI Carousel' };
  res.render('backend/UiElements/ui_carousel');
});
router.get('/ui-dropdowns', function (req, res) {
  res.locals = { title: 'UI Dropdowns' };
  res.render('backend/UiElements/ui_dropdowns');
});
router.get('/ui-grid', function (req, res) {
  res.locals = { title: 'UI Grid' };
  res.render('backend/UiElements/ui_grid');
});
router.get('/ui-images', function (req, res) {
  res.locals = { title: 'UI Images' };
  res.render('backend/UiElements/ui_images');
});
router.get('/ui-lightbox', function (req, res) {
  res.locals = { title: 'UI Lightbox' };
  res.render('backend/UiElements/ui_lightbox');
});
router.get('/ui-modals', function (req, res) {
  res.locals = { title: 'UI Modals' };
  res.render('backend/UiElements/ui_modals');
});
router.get('/ui-pagination', function (req, res) {
  res.locals = { title: 'UI Pagination' };
  res.render('backend/UiElements/ui_pagination');
});
router.get('/ui-popover-tooltips', function (req, res) {
  res.locals = { title: 'UI Popover tooltip' };
  res.render('backend/UiElements/ui_popover_tooltips');
});
router.get('/ui-rangeslider', function (req, res) {
  res.locals = { title: 'UI Range Slider' };
  res.render('backend/UiElements/ui_rangeslider');
});
router.get('/ui-session-timeout', function (req, res) {
  res.locals = { title: 'UI Session Timeout' };
  res.render('backend/UiElements/ui_session_timeout');
});
router.get('/ui-progressbars', function (req, res) {
  res.locals = { title: 'UI ProgressBars' };
  res.render('backend/UiElements/ui_progressbars');
});
router.get('/ui-sweet-alert', function (req, res) {
  res.locals = { title: 'UI Sweet Alert' };
  res.render('backend/UiElements/ui_sweet_alert');
});
router.get('/ui-tabs-accordions', function (req, res) {
  res.locals = { title: 'UI Tabs Accordions' };
  res.render('backend/UiElements/ui_tabs_accordions');
});
router.get('/ui-typography', function (req, res) {
  res.locals = { title: 'UI Typography' };
  res.render('backend/UiElements/ui_typography');
});
router.get('/ui-video', function (req, res) {
  res.locals = { title: 'UI Video' };
  res.render('backend/UiElements/ui_video');
});

// Form Elements
router.get('/form-elements', function (req, res) {
  res.locals = { title: 'Form Elements' };
  res.render('backend/Forms/form_elements');
});
router.get('/form-validation', function (req, res) {
  res.locals = { title: 'Form Validation' };
  res.render('backend/Forms/form_validation');
});
router.get('/form-advanced', function (req, res) {
  res.locals = { title: 'Form Advanced' };
  res.render('backend/Forms/form_advanced');
});
router.get('/form-editors', function (req, res) {
  res.locals = { title: 'Form Editors' };
  res.render('backend/Forms/form_editors');
});
router.get('/form-uploads', function (req, res) {
  res.locals = { title: 'Form Uploads' };
  res.render('backend/Forms/form_uploads');
});
router.get('/form-xeditable', function (req, res) {
  res.locals = { title: 'Form Xeditable' };
  res.render('backend/Forms/form_xeditable');
});

// Charts
router.get('/charts-morris', function (req, res) {
  res.locals = { title: 'Morris Chart' };
  res.render('backend/Charts/charts_morris');
});
router.get('/charts-chartist', function (req, res) {
  res.locals = { title: 'Chartist Chart' };
  res.render('backend/Charts/charts_chartist');
});
router.get('/charts-chartjs', function (req, res) {
  res.locals = { title: 'Charts Chartjs' };
  res.render('backend/Charts/charts_chartjs');
});
router.get('/charts-flot', function (req, res) {
  res.locals = { title: 'Charts Flot' };
  res.render('backend/Charts/charts_flot');
});
router.get('/charts-c3', function (req, res) {
  res.locals = { title: 'Charts C3' };
  res.render('backend/Charts/charts_c3');
});
router.get('/charts-other', function (req, res) {
  res.locals = { title: 'Charts Other' };
  res.render('backend/Charts/charts_other');
});

//tables
router.get('/tables-basic', function (req, res) {
  res.locals = { title: 'Basic Tables' };
  res.render('backend/Tables/tables_basic');
});
router.get('/tables-datatable', function (req, res) {
  res.locals = { title: 'Datatable Tables' };
  res.render('backend/Tables/tables_datatable');
});
router.get('/tables-responsive', function (req, res) {
  res.locals = { title: 'Responsive Tables' };
  res.render('backend/Tables/tables_responsive');
});
router.get('/tables-editable', function (req, res) {
  res.locals = { title: 'Editable Tables' };
  res.render('backend/Tables/tables_editable');
});

//Icons
router.get('/icons-material', function (req, res) {
  res.locals = { title: 'Icons Material' };
  res.render('backend/Icons/icons_material');
});
router.get('/icons-ion', function (req, res) {
  res.locals = { title: 'Icons Ion' };
  res.render('backend/Icons/icons_ion');
});
router.get('/icons-fontawesome', function (req, res) {
  res.locals = { title: 'Icons Fontawesome' };
  res.render('backend/Icons/icons_fontawesome');
});
router.get('/icons-themify', function (req, res) {
  res.locals = { title: 'Icons Themify' };
  res.render('backend/Icons/icons_themify');
});
router.get('/icons-dripicons', function (req, res) {
  res.locals = { title: 'Icons Dripicons' };
  res.render('backend/Icons/icons_dripicons');
});
router.get('/icons-typicons', function (req, res) {
  res.locals = { title: 'Icons Typicons' };
  res.render('backend/Icons/icons_typicons');
});

//Google Maps
router.get('/maps-google', function (req, res) {
  res.locals = { title: 'Google Maps' };
  res.render('backend/Maps/maps_google');
});
router.get('/maps-vector', function (req, res) {
  res.locals = { title: 'Vector Maps' };
  res.render('backend/Maps/maps_vector');
});

//Extra pages
router.get('/pages-timeline', function (req, res) {
  res.locals = { title: 'Pages Timeline' };
  res.render('backend/Extras/pages_timeline');
});
router.get('/pages-invoice', function (req, res) {
  res.locals = { title: 'pages-invoice' };
  res.render('backend/Extras/pages_invoice');
});
router.get('/pages-directory', function (req, res) {
  res.locals = { title: 'pages-directory' };
  res.render('backend/Extras/pages_directory');
});
router.get('/pages-blank', function (req, res) {
  res.locals = { title: 'pages-blank' };
  res.render('backend/Extras/pages_blank');
});

module.exports = router;
