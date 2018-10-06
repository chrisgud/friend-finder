module.exports = function(app) {

app.get('/', (req, res) => {
    res.redirect('home.html');
});
app.get('/survey', (req, res) => {
    res.redirect('survey.html');
});

};