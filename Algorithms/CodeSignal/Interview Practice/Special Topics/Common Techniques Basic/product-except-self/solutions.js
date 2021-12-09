// martha_o
function solution (nums, m) {
  let prod = 1
  let save = []
  let sum = 0
  let j = 0

  while (j < nums.length) {
    if (save[nums[j]] !== undefined) {
      prod = save[nums[j]]
    } else {
      for (i = 0; i < nums.length; i++) {
        if (i !== j) {
          prod = ((prod % m) * (nums[i] % m)) % m
        }
      }
      save[nums[j]] = prod
    }

    sum = sum + prod
    j++
    prod = 1
  }
  return sum % m
}


// minhtuanta
function solution (nums, m) {
  let sum = 0
  let prefixProduct = [1],
    suffixProduct = 1

  for (let i = 1; i < nums.length; i++) {
    prefixProduct[i] = (prefixProduct[i - 1] * nums[i - 1]) % m
  }

  console.log(prefixProduct)

  for (let i = nums.length - 1; i >= 0; i--) {
    sum += (prefixProduct[i] * suffixProduct) % m
    suffixProduct = (suffixProduct * nums[i]) % m
  }

  return sum % m
}


// dfreidin
function solution (nums, m) {
  // let prod = nums.reduce((a, b) => (a * b), 1);
  // let sum = nums.reduce((part, cur) => part + prod / cur, 0);
  // console.log(prod, sum);
  // return sum % m;
  let pre = [],
    post = []
  let prod1 = 1,
    prod2 = 1
  for (let i in nums) {
    pre[i] = prod1
    post[nums.length - 1 - i] = prod2
    prod1 = (prod1 * (nums[i] % m)) % m
    prod2 = (prod2 * (nums[nums.length - 1 - i] % m)) % m
  }
  // console.log(pre);
  // console.log(post);
  let sum = 0
  for (let i in nums) {
    sum = (sum + ((pre[i] * post[i]) % m)) % m
  }
  return sum
}
