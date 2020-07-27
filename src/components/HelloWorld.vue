<template>
  <div class="hello">
      <ul>{{msg}}
        <li>myClassName: {{myClassName}}</li>
        <li>myClassPropName: {{myClassPropName}}</li>
        <li>myClassSubPropName: {{myClassSubPropName}}</li>
        <li>myEnumName: {{myEnumName}}</li>
        <li>myEnumValueName: {{myEnumValueName}}</li>
        <li>myClassFunc: {{myClassFunc(x => x.name)}}</li>
      </ul>
  </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import { MyClass, MyEnum } from "./../classes/MyClasses";

    export default Vue.extend({
      name: "HelloWorld",
      props: {
          msg: { type: String, required: true }
        },
        data() {
          return {
              myClassName: nameof<MyClass>(),
              myClassPropName: nameof<MyClass>(x => x.name),
              myClassSubPropName: nameof<MyClass>(x => x.child?.description),
              myEnumName: nameof<MyClass>(),
              myEnumValueName: nameof(MyEnum.Option1),
              myClassFunc: function (func?: (obj: MyClass) => any): string { return nameof<MyClass>(func); },
          };
        }
    });
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
      margin: 40px 0 0;
    }
    ul {
      list-style-type: circle;
      padding: 0;
    }
    li {
      display: block;
      margin: 1em;
    }
    a {
      color: #42b983;
    }
</style>
