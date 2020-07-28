# VLOCA-portal
[Jekyll](https://jekyllrb.com/) based web site for the Flemish government "Vlaamse Open City Architectuur" initiative. Refer to https://www.vlaanderen.be/vloca for more info on VLOCA itself..

## Branches in this repo
Three branches are significant:
* dev: gathers commits from developers. Start your work here. Always unless you know your specific work should not start here.
* test: after checks by ABB this branch deploys to the test site URL.
* master: deploys to https://www.vlaanderen.be/vloca
## Build the site
Download the repository.
* Install jekyll. See https://jekyllrb.com/docs/installation/ ; on Windows 10, see below.
* Run `jekyll build` in the repository root.
* Serve the files in `/_site` on a webserver or use `jekyll s` and browse to https://localhost:4000 (unless you've changed that).

### Building on Windows 10
Ruby and Windows are not the ideal combination. But :-)

Windows 10 now has the Windows Subsystem for Linux. See https://docs.microsoft.com/en-us/windows/wsl/wsl2-index and https://en.wikipedia.org/wiki/Windows_Subsystem_for_Linux to know more.

Installing Ruby and Jekyll becomes very easy using WSL!
* Install your favourite distro from the Microsoft Store.
  * If you don't know your favourite distro, choose Ubuntu: https://www.microsoft.com/store/productId/9NBLGGH4MSV6 , more info at https://wiki.ubuntu.com/WSL. Follow the steps at your first run.
* Install git and ruby-bundler.
  *  In Ubuntu: `sudo apt-get install git build-essential bundler`
* Next clone the repository from WSL.
  * `git clone https://github.com/Agentschap-Binnenlands-Bestuur/vloca-portal.git`
* Install ruby requirements:
  * `cd vloca-portal`
  * `bundle install`
* Serve the site:
  * `bundle exec jekyll serve`
  * Point your browser to http://localhost:4000
* As of Windows 10 1903 there is safe file sharing between W10 and running WSL environments.
  * Explorer and your favourite editor can open files in your WSL environment via `\\wsl$\Ubuntu\<path_to_repo>
  * If you don't have a favourite editor yet, install Visual Studio Code, which doesn't need admin privileges: https://code.visualstudio.com/?wt.mc_id=vscom_downloads
  * Pay attention to the branch you're working in! __Don't work in test or master!__
