<template>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="id" label="客户ID"  />
      <el-table-column prop="custName" label="客户名称"  />
      <el-table-column prop="custAddress" label="客户地址" />
      <el-table-column prop="custMobile" label="联系方式" />
      <el-table-column prop="custTicket" label="购买水票数量" />
    </el-table>
  </template>
  
  <script lang="ts" setup>
  const tableData = [
    {
      id: '1',
      custName: 'Tom',
      custAddress: 'No. 189, Grove St, Los Angeles',
      custMobile: '12345678901',
        custTicket: '10',
    },
    {
      id: '2',
      custName: '罗碧文',
      custAddress: 'No. 189, Grove St, Los Angeles',
      custMobile: '12345678901',
        custTicket: '10',
    },
    {
      id: '3',
      custName: '陶智迪',
      custAddress: 'No. 189, Grove St, Los Angeles',
      custMobile: '12345678901',
        custTicket: '10',
    },
    {
      id: '4',
      custName: '周川',
      custAddress: 'No. 189, Grove St, Los Angeles',
      custMobile: '12345678901',
        custTicket: '10',
    },
    {
      id: '5',
      custName: 'gsw',
      custAddress: 'No. 189, Grove St, Los Angeles',
      custMobile: '12345678901',
        custTicket: '10',
    },
    {
      id: '6',
      custName: 'Tom',
      custAddress: 'No. 189, Grove St, Los Angeles',
      custMobile: '12345678901',
        custTicket: '10',
    },
    
  ]
  </script>
  