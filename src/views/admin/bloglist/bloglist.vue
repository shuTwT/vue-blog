<template>
    <div>
        <div class="el-row">
            <div class="el-col el-col-8">
                <el-input placeholder="请输⼊内容" style="min-width:500px;" clearable>
                    <template #append>
                        <el-button>
                            <el-icon>
                                <search />
                            </el-icon>
                        </el-button>
                    </template>
                </el-input>
            </div>
        </div>
        <el-table :stripe="true" :data="blogList">
            <el-table-column label="序号" type="index" width="50"></el-table-column>
        <el-table-column label="标题" prop="title" show-overflow-tooltip></el-table-column>
        <el-table-column label="分类" prop="typeName" width="150"></el-table-column>
        <el-table-column label="更新时间" width="170"></el-table-column>
        <el-table-column label="可见性" width="170"></el-table-column>
        <el-table-column label="操作" width="200"></el-table-column>
        </el-table>
        <div>
            <el-pagination  @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="queryInfo.pageNum"
                     :page-sizes="[10, 20, 30, 50]" :page-size="queryInfo.pageSize" :total="total"
                     layout="total, sizes, prev, pager, next, jumper" background></el-pagination>
        </div>
    </div>
</template>

<script >
import { ElInput, ElButton, ElIcon, ElTable, ElTableColumn,ElPagination } from "element-plus"
export default {
    components: {
        ElInput, ElButton, ElIcon, ElTable, ElTableColumn,ElPagination
    },
    created () { },
    methods () { },
    data () {
        return {
            queryInfo: {
                title: '',
                categoryId: null,
                pageNum: 1,
                pageSize: 10
            },
            blogList: [],
            total: 0,
            types: []
        }
    }
}
</script>

<style scoped>
</style>