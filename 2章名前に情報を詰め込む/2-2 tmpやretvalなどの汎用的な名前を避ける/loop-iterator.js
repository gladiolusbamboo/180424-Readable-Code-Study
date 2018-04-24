// iとかjとかkとかややこしい
for (let i = 0; i < clubs.size(); i++) {
  for (let j = 0; j < clubs[i].members.size(); j++) {
    for (let k = 0; k < users.size(); k++) {
      if (clubs[i].members[j] === users[k]) {
        console.log(`user[${k}] is in club[${i}]`);
      }
    }
  }
}

/*******************
 改善例
********************/
// イテレータの指し示すものを明確にする
for (let clubI = 0; clubI < clubs.size(); clubI++) {
  for (let membersI = 0; membersI < clubs[clubI].members.size(); membersI++) {
    for (let usersI = 0; usersI < users.size(); usersI++) {
      if (clubs[clubI].members[membersI] === users[usersI]) {
        console.log(`user[${usersI}] is in club[${clubI}]`);
      }
    }
  }
}
