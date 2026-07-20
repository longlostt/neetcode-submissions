class Solution {
    /**
     * @param {string[][]} accounts
     * @return {string[][]}
     */
    accountsMerge(accounts) {
        // "just one more map bro trust me". 0/10

        let emailToIdx = new Map(); // email -> idx
        let idxToEmail = new Map(); // idx -> email
        let emailToAcc = new Map(); // idx of email (from emailToIdx) -> idx of 'account' (index of accounts entry)
        let adj = new Map();

        let id = 0;
        for (let account of accounts) {
            for (let i = 1; i < account.length; i++) {
                let email = account[i];
                if (!emailToIdx.has(email)) {
                    emailToIdx.set(email, id);
                    idxToEmail.set(id, email);
                    id++;
                }
            }
        }

        for (let i = 0; i < accounts.length; i++) {
            for (let j = 1; j < accounts[i].length; j++) {
                if (!emailToAcc.has(emailToIdx.get(accounts[i][j])))
                    emailToAcc.set(emailToIdx.get(accounts[i][j]), i);
            }
        }

        for (let i = 0; i < id; i++) {
            adj.set(i, []);
        }

        // Connect all emails within each account
        for (let accIdx = 0; accIdx < accounts.length; accIdx++) {
            // for each entry
            for (let i = 2; i < accounts[accIdx].length; i++) {
                // start at 2nd email
                const firstEmailIdx = emailToIdx.get(accounts[accIdx][1]);
                const currentEmailIdx = emailToIdx.get(accounts[accIdx][i]);

                adj.get(firstEmailIdx).push(currentEmailIdx);
                adj.get(currentEmailIdx).push(firstEmailIdx);
            }
        }

        let visited = new Map(); // idx -> bool
        let emailGroup = new Map();

        for (let emailIdx = 0; emailIdx < id; emailIdx++) {
            if (!visited.has(emailIdx)) {
                let component = [];
                let q = [emailIdx];
                visited.set(emailIdx, true);

                while (q.length > 0) {
                    let cur = q.shift();
                    component.push(idxToEmail.get(cur)); // add email using idx

                    for (let neighbor of adj.get(cur)) {
                        if (!visited.has(neighbor)) {
                            visited.set(neighbor, true);
                            q.push(neighbor);
                        }
                    }
                }

                component.sort();
                emailGroup.set(emailIdx, component);
            }
        }
        console.log(emailGroup);

        let res = [];
        for (const [idx, group] of emailGroup) {
            const accIdx = emailToAcc.get(idx);
            res.push([accounts[accIdx][0], ...group]);
        }

        return res;
    }
}
