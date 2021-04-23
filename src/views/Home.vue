<template>
  

  <div class="m-8 rounded-3xl">
    <div class="flex flex-col ">
      <div class="flex justify-center   ">
    <div class=" block  h-44 w-44 rounded-full bg-gray-700 overflow-hidden ">
      <img
        src="../assets/logofarm.jpg"
        class=" w-full h-full object-cover "
        alt="logofarm"
      />
    </div>

    <div class="text-black font-bold text-6xl p-8 ">
      Farm Name : {{ farmname }}
    </div>
  </div>
      
      <div class="  bg-white mt-3 rounded-3xl  text-gray-900 shadow-2xl p-6 ">
        <div class="flex justify-between mb-4">
          <p class=" text-4xl font-bold">Customer Detail</p>
          <p class=" text-4xl text-gray-500 font-bold">Create : XXXX-XX-XX</p>
        </div>

        <p class=" text-2xl ">Customer Name : XXXXXXXXXXXXXX</p>
        <p class=" text-2xl ">Package : XXXXXXX</p>
        <p class=" text-2xl ">Q’ty Users : XX</p>
        <p class=" text-2xl ">Gateway : Yes or No</p>
        <p class=" text-2xl ">Analytics : Yes or No</p>
        <p class=" text-2xl ">Block Chain : Yes or No</p>

        <p class=" text-2xl ">Expired Date : XXXX-XX-XX</p>

        
      </div>

      <div class="flex flex-col bg-white mt-12  rounded-3xl shadow-2xl p-6 ">
        <div class=" flex  justify-center mb-5">
          <p class=" block text-4xl font-bold ">
            Farm Detail
          </p>
        </div>

        <p class=" block text-4xl ">Number Node : XX</p>
        <p class=" block text-4xl ">Number Parameter : XX</p>
        <p class=" block text-4xl ">Number Dashboard : XX</p>
        
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "farm",
  data() {
    return {
      farmname: "สุนทรฟาร์ม",
    };
  },
};
</script>

<style></style>
