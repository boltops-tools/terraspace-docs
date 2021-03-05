---
title: Terraspace Versioning Strategy
---

Terraspace follows semantic version only loosely. Other projects like [Rails](https://rubyonrails.org/) also does this. Some may find this surprising because people tend to think in black-and-white terms about how to handle versioning. In the real world, life’s not that simple, and it depends. Strict semantic versioning isn't always the best fit. Parts of this Matz interview has relevant thoughts about versioning: [Evrone Yukihiro Matsumoto Interview](https://evrone.com/yukihiro-matsumoto-interview-2021)

In a small community, we can move faster and experiment more. It's an advantage because we can learn, evolve, and improve things more quickly. This can mean there are breaking changes that don't necessary follow sematic versioning always. Overall, bugs get fixed, and new features are released faster. As the community grows larger, backward compatibly becomes more important. So you find other ways to experiment, for example, internal or beta versions. The additional overhead then becomes worth it. Terraspace takes this balanced versioning strategy.

For end-users, it's generally recommended to run the latest terraspace version, regardless of the versioning strategy.
