//-----
// This counter function is for working with p5
//-----

// Class that just exports the function
export class Counter {
  constructor(initial) {
    this.count = $state(initial)

    // Effects 1 - Read value from local storage
    $effect(() => {
      const savedCount = localStorage.getItem('count')
      if (savedCount) this.count = parseInt(savedCount)
    })

    // Effect 2 - Track the count and updae it in local stroage
    $effect(() => {
      localStorage.setItem('count', this.count.toString())
    })
  }
}
