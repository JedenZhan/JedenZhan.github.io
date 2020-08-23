/*
 * @Description: 全局工具函数
 * @Author: zhangzhenyang
 * @Date: 2020-08-23 14:31:56
 * @LastEditTime: 2020-08-23 16:03:33
 * @LastEditors: zhangzhenyang
 */
export const $ = e => document.getElementById(e);

export const formatTime = sec => {
  let day = parseInt(sec / (24 * 60 * 60 * 1000));
  sec = sec % (24 * 60 * 60 * 1000);
  let hour = parseInt(sec / (60 * 60 * 1000));
  sec = sec % (60 * 60 * 1000);
  let min = parseInt(sec / (60 * 1000));
  sec = sec % (60 * 1000);
  let second = parseInt(sec / 1000);
  return {
    day,
    hour,
    min,
    second,
  };
};
