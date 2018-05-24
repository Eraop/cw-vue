<template>
    <nav>
        <ul class="pagination">
            <li :class="{'disabled': current == 1}">
                <a @click="setCurrent(current - 1)"> &lt; </a>
            </li>
            <li :class="{'disabled': current == 1}">
                <a @click="setCurrent(1)"> 首页 </a>
            </li>
            <li v-for="(p,index) in grouplist" :class="{'active': current == p.val}" :key="index">
                <a @click="setCurrent(p.val)"> {{ p.text }} </a>
            </li>
            <li :class="{'disabled': current == page}">
                <a @click="setCurrent(page)"> 尾页 </a>
            </li>
            <li :class="{'disabled': current == page}">
                <a @click="setCurrent(current + 1)"> &gt; </a>
            </li>
        </ul>
    </nav>
</template>
<script>
export default {
    data() {
        return {
            current: this.currentPage
        }
    },
    props: {
        // 数据总条数
        total: {
            type: Number,
            default: 0
        },
        // 每页显示条数
        display: {
            type: Number,
            default: 10
        },
        // 当前页码
        currentPage: {
            type: Number,
            default: 1
        },
        // 分页条数
        pageSize: {
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
            return Math.ceil(this.total / this.display);
        },
        grouplist: function () { // 获取分页页码
            var len = this.page, temp = [], list = [], count = Math.floor(this.pageSize / 2), center = this.current;
            if (len <= this.pageSize) {
                while (len--) {
                    temp.push({ text: this.page - len, val: this.page - len });
                }
                ;
                return temp;
            }
            while (len--) {
                temp.push(this.page - len);
            }
            ;
            var idx = temp.indexOf(center);
            (idx < count) && (center = center + count - idx);
            (this.current > this.page - count) && (center = this.page - count);
            temp = temp.splice(center - count - 1, this.pageSize);
            do {
                var t = temp.shift();
                list.push({
                    text: t,
                    val: t
                });
            } while (temp.length);
            if (this.page > this.pageSize) {
                (this.current > count + 1) && list.unshift({ text: '...', val: list[0].val - 1 });
                (this.current < this.page - count) && list.push({ text: '...', val: list[list.length - 1].val + 1 });
            }
            return list;
        }
    },
    methods: {
        setCurrent: function (idx) {
            if (this.current != idx && idx > 0 && idx < this.page + 1) {
                this.current = idx;
                this.$emit('page-change', this.current);
            }
        }
    }
}
</script>

