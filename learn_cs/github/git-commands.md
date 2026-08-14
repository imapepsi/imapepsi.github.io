# Git Commands




## Create a git local repo

Both of these commands will work.

```console
$ git init MY_PROJECT

```

```console
$ git init
```

## Check the status of your repo

```console
$ git status
```

## Saving Changes

### Add files to git stage

These are some flags that can be used when adding changes.

* `-p` = add by permission, add certain changes
* `.` = add all files

```console
$ git add FILE

- or -

$ git add .

- or -

$ git add . -p
```

### Remove files from stage

```console
$ git reset HEAD --
```

### Commit changes to the branch

* `-m` = add a message to the commit

```console
$ git commit -m "Commit Message/tag"
$ git remote add origin REPO_URL
$ git push -u origin BRANCH_NAME
$ git push
```

## Branches

```console
-a = show all branches

-b = new branch

-d = delete

-D = force delete

```

### View all branches

```console
$ git branch -a
```

### Create a new branch

```console
$ git checkout -b NEW_BRANCH_NAME
$ git branch NEW_BRANCH_NAME
```

### Switch to Branch

```console
$ git checkout BRANCH_NAME
```

### Delete a Branch

```console
$ git branch -d BRANCH_NAME
$ git push origin --delete REMOTE_BRANCH
```

### Merge Branch

[Git Merge Master into Branch {Two Methods Explained}](https://phoenixnap.com/kb/git-merge-master-into-branch)

```console
$ git checkout BRANCH_TO_SAVE/BRANCH_TO_RECEIVE
$ git merge BRANCH_MERGING
```

Sometimes while merging git will ask you to write a commit message

The commit message is from Git, but it is actually the editor that keeps you from quitting. This is because Git uses your default editor, which for a variety of reasons is *usually* set to `vi` (it might be something else on your OS, like `pico`).

To write a commit message and get out of VI, follow these steps:

1. press `i` (i for insert)
2. write your merge message
3. press `esc` (escape)
4. write `:wq` (write & quit)
5. then press enter

You can also configure Git to use another editor to avoid having to use VI (or its close cousin VIM).

## GitHub

```console
echo "# Project Title" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:username/RepoName.git
git push -u origin main
```

### Clone a repo from local

```console
$ git clone DIRECTORY_TO_CLONE
```

### Clone a repo from remote location/GitHub

```console
$ git clone URL
```

### Pull from repo

```console
$ git pull
$ git pull origin BRANCH_NAME
```

### Push files to remote repo

```console
-u = upstream, set upstream
```

```console
$ git push -u origin BRANCH_NAME
$ git push
```

## Workflow

```console
$ cd
$ cd FOLDER_YOU_WANT
$ git clone -b BRANCH_NAME URL -or- git clone URL
$ git checkout -b NEW_BRANCH
```

### Connecting the Local and Repo Branches

```console
$ git add NEW_FILES/CHANGES
$ git commit -m "MESSAGE"
$ git push -u origin BRANCH_NAME -or- git push BRANCH_NAME
```

After your branch is done

```console
$ git checkout BRANCH_TO_KEEP
$ git merge BRANCH_TO_MERGE
$ git push
```

### Create a new Repo

```console
$ echo "# REPO_TITLE" >> README.md
$ git init
$ git add README.md
$ git commit -m "first commit"
$ git branch -M main
$ git remote add origin URL_OF_REPO
$ git push -u origin main
```

or push an existing repository from the command line

```console
$ git remote add origin URL_OF_REPO
$ git branch -M main
$ git push -u origin main
```

## Other Notes

```console
$ git config --global --replace-all user.email emailName@gmail.com
$ git config --global user.email

$ git config user.name "Your project specific name"
$ git config user.email "your@project-specific-email.com"
$ git config --get user.name
$ git config --get user.email
$ git config user.name
```