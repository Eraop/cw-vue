<template>
    <div>
        管理界面
    </div>
</template>
<script>
export default {
  created: function() {
    return this.$http.get("/api/admin/menu").then(res => {
      if (res.status == 200) {
        if (res.data !== "") {
        } else {
          this.$router.push({ name: "notfound" });
        }
      }
    });
  }
};
</script>

