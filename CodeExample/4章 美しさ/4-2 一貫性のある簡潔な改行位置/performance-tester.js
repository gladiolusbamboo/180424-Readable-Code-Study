// ごちゃごちゃしている
class PerformanceTester{
  wifiSimulator = new TcpConnectionSimulator(
    500, /* Kbps */
    90, /* millisecs latency */
    200, /* jitter */
    1 /* packet loss */
  );

  t3FiberSimulator =
  new TcpConnectionSimulator(
    45000, /* Kbps */
    10, /* millisecs latency */
    0, /* jitter */
    0 /* packet loss */
  );

  cellSimulator = new TcpConnectionSimulator(
    100, /* Kbps */
    400, /* millisecs latency */
    250, /* jitter */
    5 /* packet loss */
  );
}

/*******************
 改善例
********************/
// シルエットに一貫性をもたせる
class PerformanceTester{
  wifiSimulator = 
  new TcpConnectionSimulator(
    500,    /* Kbps */
    90,     /* millisecs latency */
    200,    /* jitter */
    1       /* packet loss */
  );

  t3FiberSimulator =
  new TcpConnectionSimulator(
    45000,  /* Kbps */
    10,     /* millisecs latency */
    0,      /* jitter */
    0       /* packet loss */
  );

  cellSimulator = 
  new TcpConnectionSimulator(
    100,    /* Kbps */
    400,    /* millisecs latency */
    250,    /* jitter */
    5       /* packet loss */
  );
}

// コメントを繰り返さないようにした場合（やりすぎだと思う）
class PerformanceTester{
  // TcpConnectionSimulator(throughput, latency, jitter, packet_loss)
  //                        [kbps]      [ms]     [ms]    [percent]

  wifiSimulator = 
  new TcpConnectionSimulator(  500,     90,      200,    1);

  t3FiberSimulator =
  new TcpConnectionSimulator(45000,     10,        0,    0);

  cellSimulator = 
  new TcpConnectionSimulator(  100,    400,      250,    5);
}
