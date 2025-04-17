<script lang="ts">
let key: string = "A"; 
let klass: string = "";
export{key, klass as class}
</script>

<div id="key-{key}" class="{klass} min-w-20 min-h-20 max-w-40 max-h-40 border-2 border-gray-500 text-center items-center justify-center align-middle ">
 <span class="text-3xl font-bold p-4 align-middle size-full flex text-center items-center justify-center">{key}</span>
</div>
