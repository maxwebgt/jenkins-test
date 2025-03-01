import jenkins.model.*
import hudson.security.*
import jenkins.security.s2m.AdminWhitelistRule

def instance = Jenkins.getInstance()

// Disable setup wizard
if (!instance.isQuiet()) {
  instance.setInstallState(jenkins.install.InstallState.INITIAL_SETUP_COMPLETED)
}

// Enable agent -> master security subsystem
instance.getInjector().getInstance(AdminWhitelistRule.class).setMasterKillSwitch(false);

// Save configuration
instance.save()
