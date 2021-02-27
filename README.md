# HobbyistCS

[![Actions Status](https://github.com/hkitsmallpotato/HobbyistCS/workflows/Manual%20IPFS%20Deploy/badge.svg)](https://github.com/hkitsmallpotato/HobbyistCS/actions)

_Complementary, selective, curated resource list that extends the "core" undergrad CS syallabus._

- Manual ipfs deploy URL (branch: `manual-ipfs`): https://hobbyistcs.lemontea.letz.dev/
- Fleek's PaaS URL (branch: `main`): https://hobbyistcs.on.fleek.co/

## Technical Details

tl;dr - It is a [JAMStack](https://jamstack.org/) style website that uses some decentralized/web3 goodies ([IPFS](https://ipfs.io/), mainly).

### The Website

We uses [Gatsby](https://www.gatsbyjs.com/) because it is versatile and powerful. For UI/theming, we uses [Material UI](https://material-ui.com/) and write the components ourselves. For data sourcing, we used plain JSON files for the raw resource data (because we want to have a static API at some point). Unfortunately, Gatsby's GraphQL layer isn't powerful enough to fully automate everything (or maybe I'm just ignorant on this front - open a pull request/issue explaining a solution if you know a way), but luckily, the number of manual pages on this website would probably have a strict upper limit. We also uses the wonderful [MDX](https://mdxjs.com/) to freely mixes Markdown and components in the same file.

To avoid painstakingly writing the JSON file entry-by-entry, we currently uses a Google Sheets that have a small [Google Apps Script](https://github.com/hkitsmallpotato/utils/tree/main/google_AppsScript/GenerateJSON) to auto generate JSON.

Images on the main pages are from the public domain.

### Deployment

We have both a [Fleek](https://fleek.co/hosting/) deployment and a manual ipfs deployment. As Fleek is end-to-end, there's not much to be said.

Some modification is needed when deploying to ipfs manually - turns out that you need to use relative links on the Gatsby site. We uses [this plugin](https://github.com/moxystudio/gatsby-plugin-ipfs) and follow the instruction there to modify the project config files. (So a main catch with this repo is that this change is only present on branch `manual-ipfs` so that one can do local development with the other branches (?)) For the rest, we mostly followed [this article](https://medium.com/microsoftazure/distributed-web-host-your-website-with-ipfs-clusters-cloudflare-and-devops-edb3a60e9ae5). We setup a Github CI/CD action in the `manual-ipfs` branch. After the build, it uses the [ipfs-deploy](https://github.com/ipfs-shipyard/ipfs-deploy) command line. We uses [Infura](https://infura.io/)'s free pinning service. The command line returns a hash/address.

We used a free subdomain provided by [Afraid](https://freedns.afraid.org/subdomain/), but we delegate to using [Dynv6](https://dynv6.com/)'s free DNS service by setting up `NS` entries. Then we use API to automatically update the `TXT` entry for [DNSLink](https://dnslink.io/). Finally, we register our subdomain on [Cloudflare's IPFS gateway](https://www.cloudflare.com/distributed-web-gateway/) and have it issue a certificate.

