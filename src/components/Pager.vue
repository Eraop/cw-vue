/*
 * @Author: Eraop 
 * @Date: 2018-05-24 19:55:30 
 * @Last Modified by: Eraop
 * @Last Modified time: 2018-05-27 14:55:01
 */

<template>
    <nav>
        <ul class="pagination pull-right" :class="{'hidden':total<=0}">
            <li :class="{'disabled': current == 1}">
                <a @click="setCurrent(current - 1)"> 上一页 </a>
            </li>
            <!-- <li :class="{'active': current == 1}">
                <a @click="setCurrent(1)"> 1 </a>
            </li> -->
            <li v-for="(p,index) in grouplist" :class="{'active': current == p.val}" :key="index">
                <a @click="setCurrent(p.val)"> {{ p.text }} </a>
            </li>
            <!-- <li :class="{'active': current == page}">
                <a @click="setCurrent(page)"> {{page}} </a>
            </li> -->
            <li :class="{'disabled': current == page}">
                <a @click="setCurrent(current + 1)"> 下一页 </a>
            </li>
        </ul>
    </nav>
</template>
<script>
export default {
    data() {
        return {
            current: this.currentPage,
            middlePage: this.currentPage
        }
    },
    props: {
        // 数据总条数
        total: {
            type: Number,
            default: 0
        },
        // 每页显示条数
        pageSize: {
            type: Number,
            default: 10
        },
        // 当前页码
        currentPage: {
            type: Number,
            default: 1
        },
        // 分页条数
        pageGroup: {
            type: Number,
            default: 5,
            coerce: function (v) {
                v = v > 0 ? v : 5;
                return v % 2 === 1 ? v : v + 1;
            }
        }
    },
    computed: {
        page: function () { // 总页数
            return Math.ceil(this.total / this.pageSize);
        },
        grouplist: function () { // 获取分页页码
            var len = this.page, temp = [], list = [], count = Math.floor(this.pageGroup / 2), center = this.middlePage;
            if (len <= this.pageGroup) {
                while (len--) {
                    temp.push({ text: this.page - len, val: this.page - len });
                }
                return temp;
            }
            while (len--) {
                temp.push(this.page - len);
            }
            var firstPage = temp.shift();
            var lastPage = temp.pop();
            var idx = temp.indexOf(center);
            (idx < count) && (center = center + count - idx);
            (this.current > this.page - count) && (center = this.page - count);

            temp = temp.splice(center - count - 2, this.pageGroup);
            do {
                var t = temp.shift();
                list.push({
                    text: t,
                    val: t
                });
            } while (temp.length);
            if (this.page > this.pageGroup) {
                (this.current > count + 1) && list.unshift({ text: '...', val: list[0].val - 1 });
                (this.current < this.page - count) && list.push({ text: '...', val: list[list.length - 1].val + 1 });
                list.unshift({ text: firstPage, val: firstPage });
                list.push({ text: lastPage, val: lastPage });
            }
            return list;
        }
    },
    methods: {
        setCurrent: function (idx) {
            if (this.current != idx && idx > 0 && idx < this.page + 1) {
                this.current = idx;
                var step = Math.floor(this.pageGroup / 2);
                if (idx >= this.middlePage + step || idx <= this.middlePage - step) {
                    this.middlePage = idx;
                }
                this.$emit('page-change', this.current);
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.pagination {
  > li {
    > a {
      cursor: pointer;
      border: 0;
      color: #6d6d6d;
      background-color: transparent;
      border-color: transparent;
      &:hover {
        color: #ffc107;
      }
    }
    &.active {
      a,
      a:focus,
      a:hover {
        z-index: 3;
        color: #ffc107;
        font-weight: bold;
        cursor: default;
        background-color: transparent;
        border-color: transparent;
      }
    }
  }
}
</style>
