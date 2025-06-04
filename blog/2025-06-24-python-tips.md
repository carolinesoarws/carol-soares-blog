---
slug: python-tips-fun-facts
title: Fun Python Tips & Curious Facts Every Developer Should Know
authors: carolsoares
tags: [python, software development, career, tips]
description: Some Python tips and fun facts to make your coding journey more interesting!

---

Hey everyone! 🐍✨ <br/>

Python isn’t just a programming language — it’s a whole vibe. Whether you’re just starting out, or already writing scripts before your morning tea (yep, I know — sorry, developer community, I don’t drink coffee!), there’s always something new (or quirky!) to learn. So here are some fun Python facts and tips to brighten your dev day:

---

## The Zen of Python

Did you know Python comes with its own “philosophy poem”?
Just open your terminal and type:

```python
import this
```

You’ll get the **Zen of Python**—19 guiding aphorisms by Tim Peters, like:

* “Beautiful is better than ugly.”
* “Simple is better than complex.”
* “Readability counts.”

Trust me, if you haven’t seen it, it’s worth a look. It’s like a fortune cookie for developers. 🐍


## Naming Your Python Files: camelCase or snake\_case?

Spoiler alert: In Python, the **PEP8 style guide** recommends using `snake_case` (lowercase with underscores) for filenames and function names—like `my_awesome_script.py`.

But… what happens if you use camelCase, like `myAwesomeScript.py`?

Technically, your script will still work, and you can even import it using the same name. But if you ever share your code, or move between Windows and Linux, you might run into confusing import errors (since Linux treats uppercase and lowercase as different files). Plus, Python tools and most developers expect `snake_case` for file and module names—so using camelCase can lead to warnings, headaches, and harder-to-maintain code.

Save yourself (and your team) some future trouble—stick to `snake_case` for filenames and module names. Your future self will thank you! 😉



## Why is it Called Python?

No, it’s not named after the snake!
Guido van Rossum, Python’s creator, named it after the British comedy group “Monty Python’s Flying Circus.”
So, it’s not uncommon to see official docs and tutorials full of jokes and silly references.
Next time you see a variable called `spam` or `eggs`—now you know why!


## Bonus Tips to Power Up Your Python

#### **F-strings make formatting a breeze:**
Instead of `"Hello, {}".format(name)` use `f"Hello, {name}"`.


#### **List comprehensions save time:**
  `[x*x for x in range(10)]`
  One line, super readable.

#### **Want to see all built-in functions?**
  Try `dir(__builtins__)` in the REPL.

#### **Use virtual environments:**
  Run `python -m venv venv` to keep your project dependencies isolated (and your global Python happy).

#### **Multiple variable assignment:**
  You can assign several variables at once:
  `a, b, c = 1, 2, 3` <br/><br/>
  Clean and “pythonic”!✨

#### **Swap variables in one line:**
  No need for a temporary variable:
  `a, b = b, a`

#### **The “else” in loops:**
  You can use `else` with a `for` or `while` loop! The `else` block runs only if the loop wasn’t interrupted by a `break`.

  ```python
  for n in range(5):
      if n == 3:
          print("Found 3!")
          break
  else:
      print("3 not found!")
  ```

#### **Underscore (`_`) for ignoring values:**
  Don’t care about a value in an assignment or loop? Use `_` as a placeholder: <br/>
  `for _, value in enumerate(my_list):`

#### **Get the index and value in a loop:**
  Use `enumerate()` for easy indexing:

  ```python
  for index, value in enumerate(['a', 'b', 'c']):
      print(index, value)
  ```

#### **Use `join()` to concatenate strings in a list:**

  ```python
  words = ["Hello", "world"]
  sentence = " ".join(words)  # Output: "Hello world"
  ```

#### **Quickly reverse a list:**

  ```python
  my_list[::-1]
  ```


## Docs, PEPs & the Awesome Python Community

* **Official Docs Are Your Best Friend:**
  The [official Python documentation](https://docs.python.org/3/) is clear, detailed, and full of examples. Whenever you’re unsure about a function, module, or syntax, check the docs first—it will save you hours of guessing and Stack Overflow deep dives.

* **PEPs: Python Enhancement Proposals:**
  Ever wondered how Python evolves? Through PEPs! These documents describe new features, improvements, and the philosophy of Python. The most famous one is [PEP 8](https://peps.python.org/pep-0008/), which defines Python’s style guide.
  Some other fun PEPs to check out:

  * [PEP 20 – The Zen of Python](https://peps.python.org/pep-0020/)
  * [PEP 257 – Docstring Conventions](https://peps.python.org/pep-0257/)
  * [PEP 484 – Type Hints](https://peps.python.org/pep-0484/)

* **Write Great Docstrings:**
  Good code tells a story—so help your future self (and your teammates) by writing clear docstrings for your functions, classes, and modules!
  Use triple quotes and follow [PEP 257](https://peps.python.org/pep-0257/):

  ```python
  def add(a, b):
      """
      Add two numbers and return the result.

      Args:
          a (int): First number.
          b (int): Second number.

      Returns:
          int: The sum of a and b.
      """
      return a + b
  ```

* **Python Community is Everywhere:**
  Don’t code alone!

  * Join [Python Discord](https://pythondiscord.com/)
  * Follow the [r/learnpython](https://www.reddit.com/r/learnpython/) subreddit
  * Attend local meetups or PyCon events
  * Or ask questions on Stack Overflow—Python’s community is famously friendly and helpful!

* **Contribute Back!**
  Python thrives on open source and community contributions. Whether you’re fixing a typo in the docs, adding a tutorial, or helping someone on a forum, you’re already making Python better for everyone.

---

### 🧠 One Last Curiosity…

The Zen of Python ends with:

> “Although practicality beats purity.”
> So if you ever feel lost in style rules, remember: It’s better to write code that works (and that you understand), than to get stuck trying to be perfect.

