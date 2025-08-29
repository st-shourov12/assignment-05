### Assignent-05

1. ## What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

- getElementById() used for a specific unique id . So we can trigger an event directly , It will be generating faster than any other selector . 

- getElementsByClassName() used for specific css class. We cant trigger an event directly , cause it contains HTML collection (array like object) . So if we need to trigger an event we have to generate a loop (for, for of) through that collection except For-each loop . It is slower than querySelectorAll(). It is can be updated when we changes on DOM.

- querySelector() used for css selector like class , id or html tag and it also used for the specific id or class of specific tag  . But it is just catch the first element which was matched . Not even second , third or rest of the element which was also matched. It works on the first element .

- querySelectorAll() used for all elements which was matched like css selector("".class", "#id") or html tags (p, div , h1, h2 or other tag also) and it also used for the specific id or class of specific tag  . It contains Nodelist (array like object ). It cant be updated when we changes on DOM , it will remain static. For trigerring an event we have to creat a loop like getElementsByClassName() , but we can use for-each loop.

--- 

2. ## How do you **create and insert a new element into the DOM**?

- I can creat an element by using document.createElement("tagName") , where tagname can be html tag like p, h1, h2, div,span,section, or other element . then I can call an parent id or class , where i want to insert the creat tag . I can use


- parent.appendChild(creating tag); 

- If I want to creat an element and set this element before or after an element , I can use prepend() for inserting before  or append() for inserting end of the element.

---

3. ## What is **Event Bubbling** and how does it work?

- If we trigger an event  in a child element , it will work from the element, and also work in the parent , grand parent element . 

- suppose I make a html file . which was organised like that,

- html>body>section>div>span 

- if I trigger an event in span , the parent element div will also be triggered and than the section , body will also be triggered . It is work like bubble . as bubble flying from down to upper , the eventBubbling also work like that .


- [note: we have to call this span , div , body, section by using getElementById, getElementsByClassName, and querySelector / querySelectorAll ]


---

4. ## What is **Event Delegation** in JavaScript? Why is it useful?

- I can use single event listener in a common parent element instead of using all child element . it makes our coding smooth and easier . It is event delegation .. It works like event bubbling , but reverse . Event bubbling work from child to parent and Event delegation work from parent to child . In event delegation we use **event.target**

- It is so useful for writting code easier , it performs well , and easy to read code for client . It works on dynamic Content.

---

5. ## What is the difference between **preventDefault() and stopPropagation()** methods?

- preventDefault() is work on submit type form , where it close the default behaviour of the form element . If we use a button in form , it will be work for submit button . There we can use preventDefault() to close the default behaviour.


- stopPropagation() is work on event Bubbling , here it close the  Bubbling so that the parent div could not triggered by child element . 

-- suppose : we make a html file ,

-- html>body>section>div>span 

-- if we triggered on span element and use stopPropagation(), the parent element wont be triggered . We can use this for closing bubble .


