import React from 'react'
import { BalineseDate } from "balinese-date-js-lib";

const now = new BalineseDate();

console.log(now.saka); // show the saka
console.log(now.sasih.name); // show the sasih name
console.log(now.wuku.name); // show the wuku name

export default function Dashboard() {
  return (
    <div>Dashboard</div>
  )
}
