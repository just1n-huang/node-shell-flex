function cmd() {
  process.stdout.write(process.cwd());
  process.stdout.write("\nprompt > ");
}

module.exports = {
  cmd,
};
