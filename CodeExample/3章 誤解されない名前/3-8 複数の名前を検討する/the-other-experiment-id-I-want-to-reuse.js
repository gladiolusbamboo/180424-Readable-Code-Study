// experimentId:100の設定を継承して使用したい

// なげぇ
class ExperimentConfig{
  experimentId = 101;
  theOtherExperimentIdIWantToReuse = 100;
}

// experimentId:100はテンプレートではないので不適切
class ExperimentConfig{
  experimentId = 101;
  template = 100;
}

// reuse_idが何を指してるか分かりにくい
class ExperimentConfig{
  experimentId = 101;
  reuse_id = 100;
}

/*******************
 改善例
********************/
// わかりやすい（せやろか）
class ExperimentConfig{
  experimentId = 101;
  copy_experiment_id = 100;
}

// わかりやすい（せやな）
class ExperimentConfig{
  experimentId = 101;
  inherit_from_experiment_id = 100;
}
