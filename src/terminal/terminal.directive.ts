/*
declare var Terminal: any;
import { TerminalHandler } from "./terminal.handler";
export let terminal = ($rootScope, $timeout) => {
    "ngInject";
    return {
        restrict: "E",
        scope: {
            options: "=",
            wsroute: "="
        },
        link: (scope, element, attrs) => {
            Terminal.applyAddon(fit);
            let terminalInstance = new Terminal(scope.options);
            let terminalHandler = new TerminalHandler(terminalInstance, scope.wsroute, $rootScope);
            const DISCONNECTION_TIME = 900000;
            const MESSAGE_TIME = 870000;
            let disconnectionCall = () => { terminalHandler.disconnect(); };
            let messageWarning = () => { scope.displayWarning(); };

            let disconnectionTimer = $timeout(disconnectionCall, DISCONNECTION_TIME);
            let displayWarningTimer = $timeout(messageWarning, MESSAGE_TIME);

            scope.$on("reloadSocketConnection", () => {
                terminalHandler.setConnectionWSRoute(scope.wsroute);
                terminalHandler.connect();
                disconnectionTimer = $timeout(disconnectionCall, DISCONNECTION_TIME);
                displayWarningTimer = $timeout(messageWarning, MESSAGE_TIME);
            });

            terminalHandler.openTerminal(element);
            terminalInstance.on("key", function (key, ev: any) {
                $timeout.cancel(disconnectionTimer);
                $timeout.cancel(displayWarningTimer);
                disconnectionTimer = $timeout(disconnectionCall, DISCONNECTION_TIME);
                displayWarningTimer = $timeout(messageWarning, MESSAGE_TIME);
                let printable = (!ev.altKey && !ev.altGraphKey && !ev.ctrlKey && !ev.metaKey);

                if (ev.keyCode === 13) {
                    terminalHandler.pushToCommandHistory();
                    terminalHandler.sendLatestCommand();
                    terminalInstance.prompt();
                    terminalHandler.clearLatestValue();
                } else if (ev.keyCode === 8) {
                    if (terminalInstance.getCurrentBufferXPosition() > 2) {
                        terminalHandler.removeLatestChar();
                        terminalInstance.write("\b \b");
                    }
                } else if (ev.keyCode === 37 || ev.keyCode === 38 || ev.keyCode === 39 || ev.keyCode === 40) {
                    return false;
                } else if (ev.keyCode === 8) {
                    if (terminalInstance.getCurrentBufferXPosition() > 2) {
                        terminalHandler.removeLatestChar();
                        terminalInstance.write("\b \b");
                    }
                }
                else if (printable) {
                    terminalInstance.write(key);
                    terminalHandler.updateLatestValue(key);
                }
            });

            // migrate to angular
            $("#clear").click(function (e) {
                terminalHandler.clearLatestValue();
                terminalInstance.reset();
                terminalHandler.writeHelloMessage();
            });

            $("#close_terminal").click(function (e) {
                terminalHandler.clearLatestValue();
                terminalInstance.reset();
                terminalHandler.disconnect();
            });
        }
    };
};
*/