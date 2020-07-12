import * as ArticlesModel from "./articles/article";

(async function process()
{
    let a = Date.now();

    let articles =  await ArticlesModel.all();
    console.log('articles count = ' + articles.length);

    let ind = Math.floor(Math.random() * articles.length);
    console.log('select index ' + ind + ', id = ' + articles[ind].id);

    let article = await ArticlesModel.one(articles[ind].id);
    console.log(article);

    let removeRes = await ArticlesModel.remove(article.id);
    console.log('что с удалением?', removeRes);

    let articlesNewList = await ArticlesModel.all();
    console.log('articles count = ' + articlesNewList.length);

    let addRes = await ArticlesModel.add({
        title: article.title + "+ add",
        body: article.body + ' + add',
        userId: 1
    });
    console.log('добавили статью - ', addRes);

    let articlesNewestList = await ArticlesModel.all();
    console.log('articles count = ' + articlesNewestList.length);

    // берём случайный индекс
    let indNew = Math.floor(Math.random() * articlesNewestList.length);
    let newArticle = articlesNewestList[indNew];
    console.log('select index ' + indNew + ', id = ' + newArticle.id)

    let editRes = await ArticlesModel.edit(newArticle.id, {
       title: article.title + ' + edit',
       body: article.body + ' + edit'
    });

    console.log('что с редактированием?', editRes);


    console.log( Date.now() - a + " ms");

})().catch( (e) => { console.log( e); } );

