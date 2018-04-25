// filter()が選択するのか除外するのか曖昧
results = Database.all_objects.filetr("year <= 2011");

/*******************
 改善例
********************/

// 「選択」であることを明確にする
results = Database.all_objects.select("year <= 2011");

// 「除外」であることを明確にする
results = Database.all_objects.exclude("year <= 2011");
