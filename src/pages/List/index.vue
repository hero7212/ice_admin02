<template>
  <div class="List-page">
    <!-- 标签消息列表 -->
    <TagMessageList />
  </div>
</template>
<script>
import TagMessageList from './components/TagMessageList';
export default {
  name: 'List',
  components: {
    TagMessageList,
  },
};
</script>
